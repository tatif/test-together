import React from 'react';

export default ({user}) => {
    return (
        <tr>
            <td>{user.debt}</td>
            <td>{user.money}$</td>
            <td>{user.name}</td>
            <td>{user.date}</td>
        </tr>
    );
};