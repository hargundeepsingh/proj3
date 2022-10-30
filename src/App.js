import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const[usersList,setUsersList]=useState([]);
  const addUserHandler=(uname,uage)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:uname , age:uage, id:Math.random().toString()}]
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList Users={usersList}/>
    </div>
  );
}

export default App;






