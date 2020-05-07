import React, {useRef} from 'react';
import anime from 'animejs';

function Card () {
  const handCard = useRef<HTMLDivElement>(null);

  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    anime({
      targets: handCard.current,
      translateX: 270
    })
  }


  return (<div ref={handCard} className="card" onClick={onClick}> This is a card </div>);
}

export default Card;