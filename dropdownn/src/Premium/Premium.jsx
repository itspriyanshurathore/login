import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

const Premium = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState('');

  const handleAadharChange = (event) => {
    const inputValue = event.target.value;
    setAadharNumber(inputValue);
    setVerifyMessage(inputValue.length === 12 ? "" : "Enter Valid Aadhar Number");
  };

  return (
    <div>
      <h1>Want to became Premium User ? mewtwo</h1> 
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis reprehenderit quod hic dolore, aperiam quaerat error dicta perferendis cupiditate ratione fuga officia ipsam, voluptatum molestiae odit, aut laboriosam veritatis! Est, dolores voluptates!</p>
        </div>
        <label >Enter Your Aadhar Card</label>
       <div>
      <input
        type="text"
        value={aadharNumber}
        onChange={handleAadharChange}
        placeholder="Enter Aadhar Number"
      />
       <span>{verifyMessage !== '' ? "Invalid Aadhar" : <>&#x2713;</>}</span>
    </div>
        <div>
        <h2>Free for 30 days</h2>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          I accept the terms and conditions
        </label>
        <br />
      </div>
    <button type='submit'  disabled={ verifyMessage !== '' && isChecked }  >
        {isChecked ? 'Get premium' : ''}
      </button>
    </div>
  );
};

export default Premium;
