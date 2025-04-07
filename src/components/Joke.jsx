import React, { useState } from 'react'


const Joke = (props) => {

  const [isShown, setIsShown] = useState(false)

  function handleToggleView() {
    setIsShown(prevState => !prevState)
  }

  console.log(props.setup, isShown)

  return (
    <>
      <div className="joke">
        {props.setup && <h3 id='props'>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
      </div>
      <hr />
      <button onClick={handleToggleView}>Toggle view</button>
    </>

  )
}

export default Joke