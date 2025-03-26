import React from 'react'


const Joke = (props) => {
  console.log(props)
  return (
    <>
      <div className="joke">
        <h3>{props.setup}</h3>
        {props.punchline ? <p>{props.punchline}</p> : ''}
      </div>
      <hr />
    </>

  )
}

export default Joke