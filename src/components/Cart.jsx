import { useId } from 'react'
import { useCart } from '../hooks/useCart'

import CartIcon from './Icons/CartIcon'
import CartRemoveIcon from './Icons/CartRemoveIcon'
import './Cart.css'

export default function Cart () {
    const cartCheckBoxId = useId()
    const {clearCart, cart, addToCart} = useCart()


    function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

 return(
        <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type='checkbox' hidden />

        <aside className='cart'>
            <ul>
                {
                    cart.map(product =>(
                        <CartItem 
                        key={product.id} 
                        addToCart={() => addToCart(product)}
                        {...product} />
                    ))
                }
            </ul>

            <button onClick={clearCart}>
                <CartRemoveIcon/>
            </button>
        </aside>
        </>
    )
}