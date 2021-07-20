import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [{id: 'u1', name: 'nate', image: 'https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR166,0,630,1200_AL_.jpg', places: 3}];
    return <UsersList items={USERS}/>
};

export default Users;