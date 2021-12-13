import './App.css';
import React , {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }
        ));
      } else{
        dispatch(logout());
      }
    });

    return unsubscribe; 
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user? (
          <LoginScreen/>
        ): (<Routes>
          <Route exact path="/" element={<HomeScreen />}/>
          <Route exact path="/profile" element={<ProfileScreen/>} /> 
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
