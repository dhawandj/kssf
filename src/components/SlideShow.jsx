import React, { useState, useEffect } from "react";

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      icon: (
        <i
          style={{ color: "red" }}
          className="fa-solid fa-hand-holding-droplet fa-fade fa-xl"
        ></i>
      ),
      title: "Card 1",
      description: "This is the first card.",
    },
    {
      icon: (
        <i
          style={{ color: "green" }}
          className="fa-solid fa-bowl-rice fa-flip fa-xl"
        ></i>
      ),
      title: "Card 2",
      description: "This is the second card.",
    },
    {
      icon: (
        <i
          style={{ color: "blue" }}
          className="fa-solid fa-handshake-angle fa-shake fa-xl"
        ></i>
      ),
      title: "Card 3",
      description: "This is the third card.",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentCard((prevCard) =>
        prevCard === cards.length - 1 ? 0 : prevCard + 1
      );
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const nextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const previousCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };

  return (
    <div className="card-slider">
      <button onClick={previousCard}>Previous</button>
      <div className="car" style={{ backgroundColor: "inherit" ,color:'white' }}>
        <span>{cards[currentCard].icon}</span>
        <h2>{cards[currentCard].title}</h2>
        <p>{cards[currentCard].description}</p>
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default CardSlider;
