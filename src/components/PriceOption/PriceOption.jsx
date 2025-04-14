import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const PriceOption = ({ option }) => {
    const { id, name, features, price } = option
    return (
        <div className='bg-blue-100 rounded-md px-4 py-3'>
            <h2 className='text-center text-2xl font-semibold'>{price}</h2>
            <h3 className='text-center text-xl mt-5 mb-3'>{name}</h3>
            {
                features.map(feature => <div className='flex my-2 items-center'>
                    <FaCheckCircle className='text-green-600 mr-2' />{feature}
                </div>)
            }
        </div>
    )
}

export default PriceOption