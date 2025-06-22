import React from 'react';

const Link = ({route}) => {
 
    return (
        <li className='pl-3 py-2 rounded-sm lg:rounded-none hover:bg-gray-900 lg:hover:bg-transparent cursor-pointer'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;