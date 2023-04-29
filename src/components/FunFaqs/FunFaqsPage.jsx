import React from "react";
import oreo from '../images/oreo.jpeg'
import chips from '../images/chips.jpeg'
import cereal from '../images/cereal.jpeg'
import protein from '../images/protein.jpeg'
import iceCream from '../images/iceCream.jpeg'
import chicken from '../images/chiken.jpeg'

function Hints() {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <>
      <div style={textStyle}> 

        <h1>Food Volume vs. Calories</h1>
        <h3>Not all food is created equal</h3>
        <h4>Discover the difference in volume for 200 calories across various foods</h4>
      </div>


      <div style={divStyle}>
        <img src={oreo} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={chips} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={cereal} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />

        <img src={protein} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={chicken} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />

        <img src={iceCream} alt="chips" style={{ padding: '4px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />

      </div>
      {/* <img src={calorie} alt="calorie" /> */}
    </>
  )
}

export default Hints;
