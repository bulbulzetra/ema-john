import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p>{name}</p>
                <p>Price: <span className='text-orange-500'>${price}</span></p>
                <p>Quantilty: <span className='text-orange-500'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='text-red-600 text-2xl' icon={faTrashAlt} />

            </button>
        </div>
    );
};

export default ReviewItem;