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
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <p onClick={handleSignOut} className='cursor-pointer border inline-block px-4 py-3 mt-4'>SignOut</p>
      </div>
    </div>
  );
}

export default Dashboard