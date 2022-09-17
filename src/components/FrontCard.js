import React from 'react'
import FrontCardContent from './FrontCardContent'

const FrontCard = ({month, year, user, cardNumber}) => {
  return (
    <div className="card-front">
        <FrontCardContent month={month} year={year} user={user} cardNumber={cardNumber} />
    </div>
  )
}

export default FrontCard