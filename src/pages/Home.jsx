import React from 'react'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <button onClick={() => window.location.href = '/ProjectOne'}>
      Go to Project One
    </button>
    <button onClick={() => window.location.href = '/ProjectTwo'}>
      Go to Project Two
    </button>
    <button onClick={() => window.location.href = '/ProjectThree'}>
      Go to Project Three
    </button>
    <button onClick={() => window.location.href = '/ProjectFour'}>
      Go to Project Four
    </button>
    </>
  )
}

export default Home