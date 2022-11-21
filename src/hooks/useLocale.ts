import { useContext } from "react";
import { LocationContext } from "../context/location";

export const useLocale = () => {
    const context = useContext(LocationContext)

    if(!context){
        throw new Error("The hook useCart must be used inside LocationProvider")
    }

    return context
}