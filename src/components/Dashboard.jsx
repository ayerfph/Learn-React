import React from 'react'
import { userAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { session, signOut } = userAuth();
  const navigate = useNavigate();

  console.log(session);

  const handleSignOut = async (e) => {
    e.preventDefault()
    try{
      await signOut();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-black shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Dashboard</h1>
        <h2 className="text-xl mb-6 text-center text-gray-1000">
          Welcome, <span className="font-semibold">{session?.user?.email}</span>
        </h2>
        <button
          onClick={handleSignOut}
          className="w-full bg-warning hover:bg-warning-dark text-white font-semibold py-3 rounded transition duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard