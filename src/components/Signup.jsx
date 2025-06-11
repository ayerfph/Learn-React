import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { session, signUpNewUser } = userAuth();
  const navigate = useNavigate();
  console.log(session);
  //console.log(email,password);

  const handleSignup =  async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

      if(result.success) {
        navigate('/dashboard');
        // Redirect or show success message
      }
    } catch (err) {
      setError("An Error Occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSignup} className='max-w-md m-auto pt-24'>
        <h2 className='font-bold pb-2'>Sign Up</h2>
        <p>
          Already have an account? <Link to='/signin'>Sign in!</Link>
        </p>

        <div className='flex flex-col py-2'>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='p-3 mt-6' type="email" value={email} />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='p-3 mt-6' type="password" value={password} />
          <button type='submit' disabled={loading} className='mt-6 w-full'>Sign up</button>
          {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Signup;