import React from 'react';
import UserData from './UserData';

const UsersList = ({data, update}) => {
    if (!data) {
        return (<p></p>)
    }

    const users = data.map((user, index) => {
        user.date = new Date(user.date).toLocaleDateString(); // форматирование даты
        return (
            <UserData user={user} key={index} update={update}/>
        );
    });

    return (
        <>
        <table>
            <tbody>
            {users}
            </tbody>
        </table>
        </>
    );
};

export default UsersList;