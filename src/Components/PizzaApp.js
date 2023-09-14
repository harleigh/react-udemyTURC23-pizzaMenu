import { Footer } from './Footer'
import {Header} from './Header'
import {PizzaMenu} from './PizzaMenu'

export default function PizzaApp() {
    return (
        <>
        <div className='container'>
            <Header/>
            <PizzaMenu />
            <Footer/>
        </div>        
        </>
    )
}