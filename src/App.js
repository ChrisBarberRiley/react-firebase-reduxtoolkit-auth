import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setActiveUser, setInactiveUser } from './features/userSlice';
import { auth, provider } from './firebase';

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  const handleSignOut = (e) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setInactiveUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignIn = (e) => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      dispatch(
        setActiveUser({
          name: result.user.displayName,
          email: result.user.email,
        })
      );
      console.log(name);
    });
  };

  return (
    <div className='App'>
      {name ? (
        <>
          <p>
            {name} and {email}
          </p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign in</button>
      )}
    </div>
  );
}

export default App;
