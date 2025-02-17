import  { useState } from 'react';
import "./BMI.css";
export const BMi = () => {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [bmiStatus,setbmiStatus]=useState("")
  const [error,setError]=useState("")
  const calculateBMI = () =>{
    const validHeight = /^\d+$/.test(height);
    const validWeight= /^\d+$/.test(weight);
    if(validHeight && validWeight)
    {
      const heightINmeter =height/100;
      const bmiValue = weight/(heightINmeter*heightINmeter)
      setBmi(bmiValue.toFixed(2))
      if(bmiValue< 18.5)
      {
        setbmiStatus("Under-Weight")
      }
      else if (bmiValue >= 18.5 && bmiValue <= 24.9)
      {
        setbmiStatus("Normal-Weight")    
      }
      else if(bmiValue >24.9 && bmiValue <=29.9)
      {
        setbmiStatus("Over-Weight")
      }
      else
      {
        setbmiStatus("Obese")
      }
    setError("")
    }
    else
    {
      setBmi(null)
      setbmiStatus("")
      setError("Please enter valid numeric values for height and weigh")
    }
  }
  const clearAll = ()=>{
    setHeight("")
    setWeight("")
    setError("")
    setbmiStatus("")
    setBmi(null)
  }
  return (
    <>
    <div className="Bmi-container">
      <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className='error'>{error}</p>}
          <div className="input-container">
            <label htmlFor="for-getting height" >Height (cm)</label>
            <input type="text" name="" id="height" value={height} onChange={(e) =>{setHeight(e.target.value)}}/>
          </div>
          <div className="input-container"> 
            <label htmlFor="for-getting weight" >Weight (Kg)</label>
            <input type="text" name="" id="weight" value={weight} onChange={(e) =>{setWeight(e.target.value)}}/>
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
          {bmi!==null &&             <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
            </div>}
        </div>
    </div>
    </>
  )
}
