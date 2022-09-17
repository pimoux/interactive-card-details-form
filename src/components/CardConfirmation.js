import React from 'react';

const CardConfirmation = ({setCardDataSent}) => {
  return (
    <div className='card-confirmation'>
        <div className='confirmation-logo'></div>
        <p className='thank-you'>THANK YOU!</p>
        <p className='card-added'>We've added your card details</p>
        <div className='button-continue-container'>
            <button onClick={() => setCardDataSent(false)}>Continue</button>
        </div>
    </div>
  )
}

export default CardConfirmation;