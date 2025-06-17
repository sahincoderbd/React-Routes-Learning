import React from 'react';

const NavMenu = () => {


    const routes =[
        { "id": 1, "path": "/", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/contact", "name": "Contact" },
        { "id": 5, "path": "/profile", "name": "Profile" }
      ]

    return (
        <nav>
            <ul>
                {
                    routes.map((route,idx)=><li key={idx}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default NavMenu;