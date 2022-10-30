import React, { useState }  from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';

import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';



const AddUser= props=>{
  const[enteredUsername,setEnteredUsername]=useState('');
  const[enteredAge,setEnteredAge]=useState('');
  const[error,setError]=useState();

  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
  const addUserHandler=(event)=>{
    event.preventDefault();
    if(enteredAge.trim().length===0 || enteredUsername.trim().length===0){
        setError({
          title: "Invalid input",
          message: "Please enter valid non empty name and age."
        })
      return;
    }

    if(+enteredAge<1){       //+ used for converting string to number
      setError({
        title: "Invalid age",
        message: "Please enter valid age (>0)."
      })    
      return;
    }

   props.onAddUser(enteredUsername,enteredAge);

    setEnteredAge('');
    setEnteredUsername('');
   
  }

  const errorHandler =()=>{
    setError(null);
  }


  return(
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
   <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>

      <Button type="submit">Add User</Button>
    
    </form>

    </Card>


    </div>
  );
}


export default AddUser;
