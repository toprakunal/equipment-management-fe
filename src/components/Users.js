import React from 'react';
import UserList from './UserList';
import UserRemove from './USerRemove';
import UserAdd from './UserAdd';

export default class Users extends React.Component{

    render(){
        return(
            <>
            
            <UserList/>
            <UserAdd/>
            <UserRemove/>
            </>
            
        )
    }

}