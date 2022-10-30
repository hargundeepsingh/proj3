import React from 'react';

import Card from '../UI/Card';

import styles from './UsersList.module.css';

const UsersList=props=>{
  return(
    <Card className={styles.users}>
        <ul>
          {props.Users.map((user)=> (<li key={user.id}>{user.name} ({user.age} in years)</li>))}
        </ul>

    </Card>
  );
}

export default UsersList;
