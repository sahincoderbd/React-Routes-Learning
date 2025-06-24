import React from 'react';
import { Link } from "react-router";


const Linker = ({route}) => {
 
    return (
        <li
 className='pl-3 py-2 rounded-sm lg:rounded-none
 hover:bg-gray-900 lg:hover:bg-transparent 
 cursor-pointer'><Link to={route.path}>{route.name}</Link></li>
    );
};

export default Linker;