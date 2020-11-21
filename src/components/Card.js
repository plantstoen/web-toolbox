import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card__wrapper">{children}카드 입니다</div>
    </div>
  );
};

export default Card;
