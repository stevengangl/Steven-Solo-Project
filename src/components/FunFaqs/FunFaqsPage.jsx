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

  const h1Style = {
    fontSize: '',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'italic'
 
  };

  return (
    <>
      <div style={textStyle}>
        <h1 style={h1Style}>Food Comparisons</h1>
        {/* <a href="#section1" className="btn">1</a> */}
      </div>

      <div style={divStyle} className="section one" id="section1">
        <img src={oreo} alt="oreo" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={chips} alt="chips" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={cereal} alt="cereal" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={protein} alt="protein" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={chicken} alt="chicken" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
        <img src={iceCream} alt="iceCream" style={{ padding: '10px', borderRadius: '5%', border: '1px solid lightblue', backgroundColor: 'lightblue' }} />
      </div>

      {/* <div className="nav">
        <a href="#section1" className="btn">1</a>
        Add other navigation links here
      </div>
      <div className="section one" id="section1">
        section 1
      </div> */}
      {/* Add other sections here */}
    </>
  )
}

export default Hints;
