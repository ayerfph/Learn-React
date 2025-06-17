import React from 'react'

const Home = ({ setPage }) => {
  return (
    <>
      <div>Home</div>
      <button onClick={() => setPage("ProjectOne")}>
        Go to Project One
      </button>
      <button onClick={() => setPage("ProjectTwo")}>
        Go to Project Two
      </button>
      <button onClick={() => setPage("ProjectThree")}>
        Go to Project Three
      </button>
      <button onClick={() => setPage("ProjectFour")}>
        Go to Project Four
      </button>
    </>
  )
}

export default Home