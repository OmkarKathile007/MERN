import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItem, addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitem'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }return null;
            })}
            <div className="cartitem-down">
                <div className="cartitems-total">
                    <h1>Cart Total </h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have Promo code ,Enter it here</p>
                        <div className='cartitems-promobox'>
                            <input type="text" placeholder='PromoCode' />
                            <button>Submit</button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default CartItems