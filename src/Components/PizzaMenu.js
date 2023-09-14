import { MenuItem } from "./MenuItem";
import {pizzaData} from "../pizzaData"

export  function PizzaMenu() {
    const numPizzas = pizzaData.length;


     const generateMenuItems = () => {
        const menuItems =  pizzaData.map( (pizza) => {
            return (
            
            <MenuItem    imgPath={pizza.photoName}
                                name={pizza.name}
                                description={pizza.ingredients}
                                price={pizza.price}
                                isSoldOut={pizza.soldOut}
                                key={crypto.randomUUID()}/>)
        })

        return menuItems
     }



    return(
        <>
        <main className="menu">
            <h2>Menu</h2>
            <p>
                Authentic Italian cuisine. {numPizzas} creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {generateMenuItems()}
          </ul>
            
        </main>       
        </>
    )
}

