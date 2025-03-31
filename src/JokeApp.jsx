import React from 'react'
import Joke from './components/Joke'
import jokesData from './jokesData'

const JokeApp = () => {

  console.log(jokesData)

  const jokes = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <>
      <div className="container">
        {jokes}
      </div>
    </>
  )
}


export default JokeApp