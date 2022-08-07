import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './Header';

import Register from './Register';
import Login from './Login';
import Main from './Main';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() { 

  const [currentUser , setCurrentUser] = React.useState({name: 'Жак-Ив Кусто', occupation: 'Исследователь океана'});

  function handleUpdateUser(user) {
    setCurrentUser(user);    
  } 

  return (
    <>  

      <CurrentUserContext.Provider value={currentUser}>    

        <Header />

        <Routes>
          <Route exact path="/" element={<Main onUpdateUser={handleUpdateUser}/>} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />          
        </Routes>      

      </CurrentUserContext.Provider>
    </>
  );
}


export default App;
