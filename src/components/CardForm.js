import React from "react";

const CardForm = ({submitData, setCvc, cvc, setMonth, month, year, setYear, cardHolder, setCardHolder, cardNumber, setCardNumber, nameError, cardNumberError, monthError, yearError, cvcError}) => {
    return (
        <div className="card-form">
            <form onSubmit={(e) => submitData(e)}>
                <div className="cardholder-name-container">
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" id="cardholder-name" className={nameError ? "error-border" : "mb-20"} placeholder="e.g. Jane Appleseed" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
                    {nameError && <span className="error-label">you must specify a name</span>}
                </div>
                <div className="card-number-container">
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input type="text" id="card-number" className={cardNumberError ? "error-border" : "mb-20"} placeholder="e.g. 1234 5678 9123 0000" value={cardNumber} onChange={(e) => setCardNumber(e)} />
                    {cardNumberError && <span className="error-label">Wrong format</span>}
                </div>
                <div className="parent-card-date">
                    <div className="card-mm-container">
                        <label htmlFor="card-mm">EXP. DATE</label>
                        <input type="text" id="card-mm" className={monthError ? "error-border" : "mb-20"} placeholder="MM" value={month} onChange={(e) => setMonth(e)} />
                        {monthError && <span className="error-label">fill</span>}
                    </div>
                    <div className="card-yy-container">
                        <label htmlFor="card-yy">(MM/YY)</label>
                        <input type="text" id="card-yy" className={yearError ? "error-border" : "mb-20"} placeholder="YY" value={year} onChange={(e) => setYear(e)} />
                        {yearError && <span className="error-label">fill</span>}
                    </div>
                    <div className="card-cvc-container">
                        <label htmlFor="card-cvc">CVC</label>
                        <input type="text" id="card-cvc" className={cvcError ? "error-border" : "mb-20"} placeholder="e.g. 123" value={cvc} onChange={(e) => setCvc(e)} />
                        {cvcError && <span className="error-label">Wrong format</span>}
                    </div>
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default CardForm;
