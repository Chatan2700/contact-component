import React from 'react'

const Forms = () => {

  /** @param {param} event */ //JS DOCS 
  function singUp(formData) {
    const email = formData.get('email')
    const pwd = formData.get('password')
    console.log(email, pwd)
  }

  return (
    <div className="container">
      <section>
        <h1>Singup form</h1>
        <form action={singUp}>
          <label htmlFor='email'>Email: </label>
          <input id="email" type="email" name="email" placeholder='joe@gmail.com' />
          <br />
          <label htmlFor='pwd'>Password: </label>
          <input id="pwd" type="password" name="password" />
          <br />

          <button className='btn-form' type='submit'>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Forms