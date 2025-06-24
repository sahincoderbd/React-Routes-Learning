import React from 'react';
import { useLoaderData } from 'react-router';
import User from './Components/User';

const Users = () => {
    const users=useLoaderData();
    console.log(users);
    return (
        <div className='text-center my-4'>
            <h2 className='text-2xl font-bold'>Users:{users.length}</h2>
            <table className='text-center w-full my-4 border-collapse'>
            <thead className='bg-amber-600'>
                <tr>
                <th className='  py-2 rounded-l-sm'>Name</th>
                <th className='  py-2 border-x border-white'>Phone</th>
                <th className=' py-2 border-r'>Email</th>
                <th className=' py-2 rounded-r-sm'>Details</th>
                </tr>
            </thead>
        <tbody>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </tbody>
            </table>
        </div>
    );
};

export default Users;