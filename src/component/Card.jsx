import React from "react";
import "./Card.css";
import Orderbut from "./Orderbut";
import BuyCard from "./BuyCard";

const Card = () => {
  const collection = [
    {
      title: "Intel i9-14900K, RTX 4080 CPU",
      imgsrc: "src/pic/Antec-DF600-FLUX-PC-Case.jpg",
      desc: "The Intel Core i9-14900K is a high-performance processor designed for gaming enthusiasts and professional content creators.",
      price: "$2380.02"
    },
    {
      title: "E-Blue Mazer K727 Mechanical Keyboard",
      imgsrc: "src/pic/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.webp",
      desc: "The E-Blue Mazer K727 is a mechanical gaming keyboard designed for gamers who demand precision, durability, and style.",
      price: "$48.00"
    },
    {
      title: "Microsoft Surface Desktop PC",
      imgsrc: "src/pic/microsoft-surface-desktop-pc-500x500.webp",
      desc: "The Microsoft Surface Studio 2+ is a premium all-in-one desktop computer designed for creative professionals and those seeking a sleek.",
      price: "$590.00"
    },
    {
      title: "Arctic Fox APEX EON Gaming Mouse ",
      imgsrc: "src/pic/1_f87f08be-bf1b-4065-ae81-21d7c1ad0f69.webp",
      desc: "The Arctic Fox APEX EON Gaming Mouse is engineered for gamers who seek precision, speed, and customization in their gaming peripherals.",
      price: "30.00"
    },
  ];

  return (
    <>
    <div className="aasd">
      {collection.map((list, index) => (
        <div className="cardlist" key={index}>
          <img className="card-margin" src={list.imgsrc} alt="" />
          <h3 className="card-margin"> {list.title} </h3>
          <p className="card-margin"> {list.desc} </p>
          <Orderbut price = {list.price} title = {list.title}></Orderbut>
        </div>
      ))}
    </div>

    </>
  );
};

export default Card;
