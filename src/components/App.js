import React from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Main from './Main';

import Auth from '../utils/auth';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import ProtectedRoute from './ProtectedRoute';

function App() { 

  let navigate = useNavigate();

  const [currentUser , setCurrentUser] = React.useState({name: 'Жак-Ив Кусто',
                                                         occupation: 'Исследователь океана',
                                                         email: 'ff'});

  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
      const jwt = localStorage.getItem('mesto-jwt');
      if (jwt) {
        Auth.me(jwt)
            .then(data => {
              setLoggedIn(true);
              setCurrentUser({name: 'Жак-Ив Кусто',
                              occupation: 'Исследователь океана',
                              email: data.data.email});
              navigate('/');
            })
            .catch(err => {
                err.json().then(err => console.log(err.message))                        
            }                    
            )
      }
    },[navigate]      
  );

  function handleUpdateUser(user) {
    setCurrentUser(user);    
  }  
  
  return (
    <>  

      <CurrentUserContext.Provider value={currentUser}>    

        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login setLoggedIn={setLoggedIn}/>} />          
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
