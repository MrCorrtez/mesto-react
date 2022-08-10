import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Main from './Main';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import ProtectedRoute from './ProtectedRoute';

function App() { 

  const [currentUser , setCurrentUser] = React.useState({name: 'Жак-Ив Кусто', occupation: 'Исследователь океана'});
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleUpdateUser(user) {
    setCurrentUser(user);    
  } 

  return (
    <>  

      <CurrentUserContext.Provider value={currentUser}>    

        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />          
          <Route path="/" element={
            <ProtectedRoute loggedIn={loggedIn}> 
              <Main onUpdateUser={handleUpdateUser}/> 
            </ProtectedRoute>}>
          </Route>
          <Route path="*" element={
            <ProtectedRoute loggedIn={loggedIn}> 
              <Main onUpdateUser={handleUpdateUser}/> 
            </ProtectedRoute>}>
          </Route>
        </Routes>      

      </CurrentUserContext.Provider>
    </>
  );
}


export default App;
