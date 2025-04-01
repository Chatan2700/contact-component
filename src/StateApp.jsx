import React, { useState } from 'react'

const StateApp = () => {

  const [myFavoriteThings, setMyFavoriteThings] = useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)


  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])

  }
  return (
    <>
      <div className="container">
        <main>
          <button onClick={addFavoriteThing}>Add item</button>
          <section aria-live="polite">
            {thingsElements}
          </section>
        </main>
      </div>
    </>
  )

}


export default StateApp