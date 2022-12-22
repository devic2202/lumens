import React from "react";
import petrolImg from "./images/petrolImg.png";
import foodImg from "./images/foodImg.png";
import rentalImg from "./images/rentalImg.png";
import "./lumensDetails.scss";

LumensDetails.propTypes = {};

function LumensDetails(props) {
  const petrol = [
    {
      img: <img className="img-petrol" src={petrolImg} alt="petrol" />,
      value: "15 Coins",
      text: "50% discount for every $100 top-up on your Shell Petrol Card",
    },
    {
      img: <img className="img-petrol " src={petrolImg} alt="petrol" />,
      value: "1,000 Coins",
      text: "70% discount top-up on your Shell Petrol Card",
      link: "Insufficient coins",
    },
    {
      img: <img className="img-petrol " src={petrolImg} alt="petrol" />,
      value: "1,000 Coins",
      text: "70% discount top-up on your Shell Petrol Card",
      link: "Insufficient coins",
    },
  ];

  const rentalRebate = [
    {
      img: <img className="img-rental" src={rentalImg} alt="rental" />,
      value: "20 Coins",
      text: "Get $20 Rental rebate",
    },
    {
      img: <img className="img-rental" src={rentalImg} alt="rental" />,
      value: "15 Coins",
      text: "Get $500 Rental rebate",
    },
    {
      img: <img className="img-rental" src={rentalImg} alt="rental" />,
      value: "15 Coins",
      text: "Get $500 Rental rebate",
    },
  ];

  const food = [
    {
      img: <img className="img-food" src={foodImg} alt="food" />,
      value: "25 Coins",
      text: "NTUC Fairprice $50 Voucher",
    },
    {
      img: <img className="img-food" src={foodImg} alt="food" />,
      value: "5 Coins",
      text: "Free Cold Stone Sundae at any flavour!",
    },
    {
      img: <img className="img-food" src={foodImg} alt="food" />,
      value: "5 Coins",
      text: "Free Cold Stone Sundae at any flavour!",
    },
  ];

  return (
    <>
      <div className="lumens-contain">
        <h1>Petrol</h1>
        <div className="lumens-details">
          {petrol.map((it) => (
            <div className="lumens-items">
              <p>{it?.img}</p>
              <p className="value">{it?.value}</p>
              <p className="text">{it?.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lumens-contain">
        <h1>Rental Rebate</h1>
        <div className="lumens-details">
          {rentalRebate.map((it) => (
            <div className="lumens-items">
              <p>{it?.img}</p>
              <p className="value">{it?.value}</p>
              <p className="text">{it?.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lumens-contain">
        <h1>Food and Beverage</h1>
        <div className="lumens-details">
          {food.map((it) => (
            <div className="lumens-items">
              <p>{it?.img}</p>
              <p className="value">{it?.value}</p>
              <p className="text">{it?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LumensDetails;
