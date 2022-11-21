import { MapPin } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog';

import { useLocale } from "../../hooks/useLocale"

import { Content, DialogForm, LocationButton, Overlay } from "./style"
import Input from "../Input";
import { Text } from "../Text";
import { Button } from "../Buttons/Button";
import { SubmitButton } from "../Buttons/SubmitButton";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormData{
    cep: string
    number: string
}

export const LocationInfo: React.FC = () => {

    const { location, getLocation } = useLocale()

    const [open, setOpen] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        cep: "",
        number: ""
    })

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = async() => {
        try {
            await getLocation(formData)
            handleClose()
        } catch (error: any) {
            console.log(error)
            toast.success(error.message)
        }
    }

    return (
        <Dialog.Root open={ open }>
            <Dialog.Trigger asChild onClick={() => setOpen(true)}>
                <LocationButton>
                    <MapPin weight="fill"/>
                    { location?.city ? (
                        `${ location.city }, ${ location.state }`
                    ): (
                        "Adicione seu endereço"
                    )}
                </LocationButton>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Overlay/>
                <Content>
                    <DialogForm>
                        <Text size="2-xl">Por favor infor seu endereço:</Text>
                        <div>
                            <Input 
                                type="text"
                                className="cep"
                                placeholder="CEP"
                                fullWidth
                                value={ formData.cep }
                                onChange={(event: any) => setFormData(prev => ({ ...prev, cep: event.target.value }))}
                            />
                            <Input 
                                type="text"
                                className="number"
                                placeholder="Número"
                                fullWidth
                                value={ formData.number }
                                onChange={(event: any) => setFormData(prev => ({ ...prev, number: event.target.value }))}
                            />
                        </div>
                        <div>
                            <Button.Root onClick={ handleClose }>
                                <Button.Text>
                                    Fechar
                                </Button.Text>
                            </Button.Root>
                            <SubmitButton type="button" onClick={ handleSubmit }>
                                Salvar
                            </SubmitButton>
                        </div>
                    </DialogForm>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}