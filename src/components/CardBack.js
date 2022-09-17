import React from "react";

const CardBack = ({ cvc }) => {
  const formatCvc = (cvc) => {
    if (cvc === "") {
      return "000";
    }

    const lengthToCompleteCVC = 3 - cvc.length;
    for (let i = 0; i < lengthToCompleteCVC; i++) {
      cvc += "0";
    }

    return cvc;
  };

  return (
    <div className="card-back">
      <p>{formatCvc(cvc)}</p>
    </div>
  );
};

export default CardBack;
