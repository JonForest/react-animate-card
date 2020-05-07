import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import Card from './components/Card';
import {useSpring, animated} from 'react-spring';

const AnimatedCard = animated(Card);

function App() {

  return (
    <div className="App">

      <div className="wrapper">
        <div className="col1">
          col 1<br/>
          <AnimatedCard />
        </div>
        <div className="col2">
          col 2 <br/>
        </div>
      </div>
    </div>
  );
}

export default App;


/**
 * Plan for animation if I can't find a better library.
 * 1. User clicks card
 * 2. Render absolute positioned card on top of relative position (original) card
 * 3. Original card opacity 0 (so other cards don't re-render)
 * 4. Render played card, with opacity 0
 * 5. Using top and left properties, animate the abs card to the new location
 * 5.1 Need to figure out the x,y delta between the two positions and animate https://jsfiddle.net/bf9nv1q6/
 * 6. Render played card with opactity 0 and remove abs card from the DOM
 * 
 * Read from here:https://www.react-spring.io/docs/hooks/basics 
 */