import React from 'react'

const ConditionalRend = () => {
  const [messages, setMessages] = React.useState(["a", "b"])

  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up!"
    } else if (messages.length === 1) {
      return "You have 1 unread message"
    } else {
      return `You have ${messages.length} unread messages`
    }
  }

  return (
    <>
      <h1>{determineText()}</h1>
    </>
  )
}

export default ConditionalRend