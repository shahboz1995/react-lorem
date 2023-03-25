import React from "react";

import data from "./data";


import './App.css';


function App() {
  const [ count, setCount] =React.useState(0)
  const [ text, setText] =React.useState([])
  const handleSubmit =(e)=>{
    e.preventDefault();
    let amount = parseInt(count)
   if (amount <=0) {
    amount =1
   }
   if (amount > 8) {
    amount = 8
   }
   setText(data.slice(0,amount))
   console.log(amount);
  }

  return (
    <div className="App">
      <section className='section-center'>
        <h3>tired of boring lorem ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label>
            paragraphs
          </label>
          <input type="number"
           name="amount" 
          id="amount"
          max={8}  
          value={count} 
          onChange={({target: {value}})=>setCount(value)}/>
          <button type="submit" className='btn'>generator</button>
        </form>
          <article className='lorem-text'>
            {
              text.map((item,index)=>{
                return<p key={index}>{item}</p>
              })
            }
          </article>

      </section>
    </div>
  );
}

export default App;
