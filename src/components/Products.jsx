import './Products.css'
import { useCart } from '../hooks/useCart'
import CartRemoveIcon from './Icons/CartRemoveIcon'
import AddIcon from './Icons/AddCart'


export default function Products ( {products} ){
    const {addToCart, removeFromCart, cart} = useCart()

    const checkProductInCart = product =>{
        return cart.some(item => item.id ===product.id)
    }
    return(
        <>
        <main className='products'>
            <ul>
                {products.slice(0,15).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return(
                        <li
                        category={product.category} 
                        key={product.id}>
                        <img 
                        src={product.img}
                        alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong>
                            <strong> - ${product.price}</strong>
                        </div>
                        <div>
                        <button
                         style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} 
                         onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <CartRemoveIcon />
                      : <AddIcon />
                  }
                </button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </main>
        </>
    )
}