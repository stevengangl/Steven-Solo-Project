import * as React from 'react';
import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state isconst ExpandMore = styled((props) => {


function InfoPage() {










  return (

    <>
    
    <div className='infotext'>
    <h1>About HealthyMe</h1>

      <h4>The idea for HealthyMe was born out of a desire for clear and concise health and fitness information.
        With so much conflicting and overwhelming information available,
        it can be challenging to know what to believe and how to take action.
        HealthyMe was developed to provide users with fast, precise,
        and user-friendly information that is tailored to their individual needs, without all the extra noise. 
        By focusing on the essentials and utilizing advanced biometric technology,
         HealthyMe delivers unique and personalized insights that 
         enable users to make informed decisions and lead healthier lives.</h4>

<h2>Technologies Used:
  <li>React</li>
  <li>Node.js</li>
  <li>JavaScript</li>
  <li>Redux</li>
  <li>CSS</li>
  <li>PostgreSQL</li>
  <li>Material-UI</li>
</h2>
</div>

<div className='Thanks'>
<h3>Thanks to all the instructors at Prime Digital Academy, Id also like to thank the Aquamarine cohort for all the help and support along the way!</h3>

</div>


<div className='contactInfo'>
<h2>
  Visit my Linkedin: <a href='https://www.linkedin.com/in/steven-gangl-965832218/' target='_blank' > Click Here</a>
  <br />
  Visit my GitHub: <a href='https://github.com/stevengangl' target='_blank' > Click Here</a>

</h2>


    </div>
    
    </>
  );
}

export default InfoPage;
