import React from 'react'
import PriceOption from '../PriceOption/PriceOption'

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Starter Plan",
            "features": [
                "Access to gym equipment",
                "Locker facility"
            ],
            "price": "$19/month"
        },
        {
            "id": 2,
            "name": "Basic Plan",
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "1 personal training session/month"
            ],
            "price": "$29/month"
        },
        {
            "id": 3,
            "name": "Standard Plan",
            "features": [
                "24/7 gym access",
                "Locker & shower facility",
                "4 personal training sessions/month",
                "Free group fitness classes"
            ],
            "price": "$59/month"
        },
        {
            "id": 4,
            "name": "Premium Plan",
            "features": [
                "All Standard Plan features",
                "Unlimited personal training",
                "Nutrition and diet consultation",
                "Free merchandise pack"
            ],
            "price": "$89/month"
        },
        {
            "id": 5,
            "name": "Student Plan",
            "features": [
                "Gym access during off-peak hours",
                "Locker facility",
                "1 group class/week"
            ],
            "price": "$25/month"
        },
        {
            "id": 6,
            "name": "Family Plan",
            "features": [
                "Access for 2 adults and 2 kids",
                "All Standard Plan features",
                "Kids fitness programs",
                "Group family classes"
            ],
            "price": "$99/month"
        },
        {
            "id": 7,
            "name": "Corporate Plan",
            "features": [
                "Customized packages for teams",
                "On-site wellness sessions",
                "Group training discounts",
                "Monthly progress reports"
            ],
            "price": "$199/month"
        },
        {
            "id": 8,
            "name": "Elite Plan",
            "features": [
                "All Premium features",
                "Dedicated personal coach",
                "1-on-1 physiotherapy sessions",
                "Monthly spa treatment"
            ],
            "price": "$149/month"
        }
    ]
    return (
        <div>
            <h2 className="text-3xl md:text-5xl font-semibold italic text-center mt-4">Best Offers in the Town</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 my-5'>
                {
                    priceOptions.map(priceOption => <PriceOption
                        key={priceOption.id}
                        option={priceOption}
                    />)
                }
            </div>
        </div>
    )
}

export default PriceOptions