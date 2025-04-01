import React from 'react'
import reactlogo from '../assets/react.svg'
import vitelogo from 'C:/Users/juanr/OneDrive/Documents/React/Scrimba/Scrimba-playground/public/vite.svg'

const ComplexStateApp = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  let starIcon = contact.isFavorite ? vitelogo : reactlogo

  function toggleFavorite() {
    console.log("Toggle Favorite")
    setContact(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))

  }

  return (
    <div className="container">
      <main>
        <article className="card">
          <img
            src={reactlogo}
            className="avatar"
            alt="User profile picture of John Doe"
          />
          <div className="info">
            <button
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite}
              aria-label={contact.isFavorite ? 'Remove from favorite' : 'Add to favorite'}
              className="favorite-button"
            >
              <img
                src={starIcon}
                alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
              />
            </button>
            <h2 className="name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="contact">{contact.phone}</p>
            <p className="contact">{contact.email}</p>
          </div>

        </article>
      </main>
    </div>
  )
}

export default ComplexStateApp