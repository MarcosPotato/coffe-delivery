import AmericanCoffee from '../assets/images/coffees/american.png'
import ArabicCoffee from '../assets/images/coffees/arabic.png'
import Capuccino from '../assets/images/coffees/capuccino.png'
import CoffeeWithMilk from '../assets/images/coffees/coffee-with-milk.png'
import ColdCoffee from '../assets/images/coffees/cold.png'
import CreamCoffee from '../assets/images/coffees/cream.png'
import CubanCoffee from '../assets/images/coffees/cuban.png'
import HawaianCoffee from '../assets/images/coffees/hawaian.png'
import HotChocolate from '../assets/images/coffees/hot-chocolate.png'
import IrishCoffee from '../assets/images/coffees/irish.png'
import LatteCoffee from '../assets/images/coffees/latte.png'
import Macchiato from '../assets/images/coffees/macchiato.png'
import Mocaccino from '../assets/images/coffees/mocaccino.png'
import TraditionalCoffee from '../assets/images/coffees/traditional.png'

export const Coffees = [
    {
        id: "01",
        image: TraditionalCoffee,
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        markers: ["tradicional"],
        price: 9.9
    },
    {
        id: "02",
        image: AmericanCoffee,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        markers: ["tradicional"],
        price: 9.9
    },
    {
        id: "03",
        image: CreamCoffee,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        markers: ["tradicional"],
        price: 9.9
    },
    {
        id: "04",
        image: ColdCoffee,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        markers: ["tradicional", "gelado"],
        price: 9.9
    },
    {
        id: "05",
        image: ColdCoffee,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        markers: ["tradicional", "gelado"],
        price: 9.9
    },
    {
        id: "06",
        image: CoffeeWithMilk,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        markers: ["tradicional", "com leite"],
        price: 9.9
    },
    {
        id: "07",
        image: LatteCoffee,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        markers: ["tradicional", "com leite"],
        price: 9.9
    },
    {
        id: "08",
        image: Capuccino,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        markers: ["tradicional", "com leite"],
        price: 9.9
    },
    {
        id: "09",
        image: Macchiato,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        markers: ["tradicional", "com leite"],
        price: 9.9
    },
    {
        id: "10",
        image: Mocaccino,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        markers: ["tradicional", "com leite"],
        price: 9.9
    },
    {
        id: "11",
        image: HotChocolate,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        markers: ["especial", "com leite"],
        price: 9.9
    },
    {
        id: "12",
        image: CubanCoffee,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        markers: ["especial", "alcoólico", "com leite"],
        price: 9.9
    },
    {
        id: "13",
        image: HawaianCoffee,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        markers: ["especial"],
        price: 9.9
    },
    {
        id: "14",
        image: ArabicCoffee,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        markers: ["especial"],
        price: 9.9
    },
    {
        id: "15",
        image: IrishCoffee,
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        markers: ["especial"],
        price: 9.9
    }
]