import React from 'react'
import './DescriptionBox.css'



const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
         <p>A e-commerce website is an online platform that facitlites for buying and selling of productsor services
            over the internet serves as virtual market place where businesses and individuals showcase their product interact
            with customer and conduct transaction without the need for physical presence, Ecommerce websites have gainded 
            immnese popularity  due to their conveneinece accesibility and thr global reach they offer
            <p>E-commerce wewbsites typically display product or services and detail description ,images 
                prices and any available (e.g sizes, colors).
                Each product usually has its own dedicated with relevant information
            </p>
         </p>
       </div>
    </div>
  )
}

export default DescriptionBox