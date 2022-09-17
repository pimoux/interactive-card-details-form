import { useState } from "react";
import "./assets/css/style.css";
import CardBack from "./components/CardBack";
import CardConfirmation from "./components/CardConfirmation";
import CardForm from "./components/CardForm";
import FrontCard from "./components/FrontCard";

function App() {
  const [cardDataSent, setCardDataSent] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // const [nameError, setNameError] = useState(false);
  // const [cardNumberError, setCardNumberError] = useState(false);
  // const [monthError, setMonthError] = useState(false);
  // const [yearError, setYearError] = useState(false);
  // const [cvcError, setCvcError] = useState(false);

  const handleChangeCvc = (e) => {
    const regex = /[0-9]{0,3}/;
    const value = parseInt(e.target.value);
    const length = e.target.value.length;
    if (
      regex.test(e.target.value) &&
      (!isNaN(value) || e.target.value === "") &&
      length <= 3
    ) {
      setCvc(e.target.value);
    }
  };

  const handleChangeMonth = (e) => {
    if (e.target.value === "") {
      setMonth("");
    }

    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= 12 && e.target.value[0] !== "0") {
      setMonth(e.target.value);
    }
  };

  const handleChangeYear = (e) => {
    if (e.target.value === "") {
      setYear("");
    }
    const regex = /[0-9]{0,2}/gi;
    const value = parseInt(e.target.value);
    if (regex.test(value) && (!isNaN(value) || e.target.value === "") && value <= 99 && e.target.value[0] !== "0"
    ) {
      setYear(e.target.value);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleChangeCardNumber = (e) => {
    const regex = /[0-9]{0,16}/gi;
    const value = parseInt(e.target.value);
    const length = e.target.value.length;
    if (regex.test(value) && (!isNaN(value) || e.target.value === "") && length <= 19 && e.target.value[0] !== "0"
    ) {
      setCardNumber(formatCardNumber(e.target.value));
    }
  };

  return (
    <div className="App">
      <div className="background">
        <CardBack cvc={cvc} />
        <FrontCard month={month} year={year} user={cardHolder} cardNumber={cardNumber} />
      </div>
      {cardDataSent ? (
        <CardConfirmation setCardDataSent={setCardDataSent} />
      ) : (
        <CardForm
          cvc={cvc}
          month={month}
          year={year}
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          setMonth={handleChangeMonth}
          setCvc={handleChangeCvc}
          setYear={handleChangeYear}
          setCardHolder={setCardHolder}
          setCardNumber={handleChangeCardNumber}
          setCardDataSent={setCardDataSent}
        />
      )}
    </div>
  );
}

export default App;
