import React, { useState } from 'react'

const StateApp = () => {

  const [count, setCount] = useState(0)

  /**
      * Note: if you ever need the old value of state
      * to help you determine the new value of state,
      * you should pass a callback function to your
      * state setter function instead of using
      * state directly. This callback function will
      * receive the old value of state as its parameter,
      * which you can then use to determine your new
      * value of state.
      */

  function add() {
    // the arrowFun receives the state variable as a parameter for the function which we can alter to our liking
    setCount(prevCount => prevCount + 1)
  }

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <div className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button onClick={subtract} className="minus" aria-label="Decrease count">–</button>
          <h2 className="count">{count}</h2>
          <button onClick={add} className="plus" aria-label="Increase count">+</button>
        </div>
      </div>
    </>
  )

}


export default StateApp