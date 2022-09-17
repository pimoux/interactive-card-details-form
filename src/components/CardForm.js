import React from "react";

const CardForm = ({setCardDataSent, setCvc, cvc, setMonth, month, year, setYear, cardHolder, setCardHolder, cardNumber, setCardNumber}) => {
  return (
    <div className="card-form">
        <form>
            <div className="cardholder-name-container">
                <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                <input type="text" id="cardholder-name" placeholder="e.g. Jane Appleseed" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
            </div>
            <div className="card-number-container">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" id="card-number" placeholder="e.g. 1234 5678 9123 0000" value={cardNumber} onChange={(e) => setCardNumber(e)} />
            </div>
            <div className="parent-card-date">
                <div className="card-mm-container">
                    <label htmlFor="card-mm">EXP. DATE</label>
                    <input type="text" id="card-mm" placeholder="MM" value={month} onChange={(e) => setMonth(e)} />
                </div>
                <div className="card-yy-container">
                    <label htmlFor="card-yy">(MM/YY)</label>
                    <input type="text" id="card-yy" placeholder="YY" value={year} onChange={(e) => setYear(e)} />
                </div>
                <div className="card-cvc-container">
                    <label htmlFor="card-cvc">CVC</label>
                    <input type="text" id="card-cvc" placeholder="e.g. 123" value={cvc} onChange={(e) => setCvc(e)} />
                </div>
            </div>
            <button type="submit" onClick={() => setCardDataSent(true)}>Confirm</button>
        </form>
    </div>
  );
};

export default CardForm;
