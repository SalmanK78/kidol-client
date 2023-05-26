import React from 'react';
import { NavLink } from "react-router-dom";


const ActiveLink = ({to,children}) => {
    
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive}) =>
                      isActive
                        ? "text-fuchsia-600 border-b-2 border-fuchsia-500"
                        :""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;

