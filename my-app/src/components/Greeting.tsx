import { useState } from 'react';

const UserGreeting = () => {
  return <p>Hei kirjautunut käyttäjä!</p>;
};

const GuestGreeting = () => {
  return <p>Kirjaudu sisään</p>;
};

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {!isLoggedIn && (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      {/* toggle-nappula (huom! jsx:n sisällä oleva kommentti) */}
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </>
  );
};

export default Greeting;
