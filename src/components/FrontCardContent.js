import React from 'react'

const FrontCardContent = ({month, year, user, cardNumber}) => {
  const formatMonth = (month) => {
    if (month === "") {
      return "00";
    }

    return parseInt(month) < 10 ? `0${month}` : month; 
  }

  const formatYear = (year) => {
    if (year === "") {
      return "00";
    }

    return parseInt(year) < 10 ? `0${year}` : year; 
  }

  const formatUser = (user) => user === "" ? "JANE APPLESEED" : user;

  const formatCardNumber = (number) => {
    number = number.split(" ").join("");
    const lengthToComplete = 16 - number.length;
    for (let i = 0; i < lengthToComplete; i++) {
      number += "0";
    }

    return number.match(/.{1,4}/g).join(" ");
  }

  return (
    <div className='card-front-content'>
        <div className='card-front-rounds'>
            <div className='filled-round'></div>
            <div className='border-round'></div>
        </div>
        <p className='card-front-number'>{formatCardNumber(cardNumber)}</p>
        <div className='card-front-user-info'>
            <p>{formatUser(user)}</p>
            <p>{formatMonth(month)}/{formatYear(year)}</p>
        </div>
    </div>
  )
}

export default FrontCardContent