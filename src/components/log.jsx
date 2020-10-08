import React from 'react';
import {
    NavLink,
    Outlet
  } from "react-router-dom";

function Log() {
        return (
            <>
            <nav class="subnav">
                <ul>
                    <li><NavLink to="about" activeStyle={{ backgroundColor: 'darkgray' }}>Log</NavLink></li>
                    <li><NavLink to="vehicles" activeStyle={{ backgroundColor: 'darkgray' }}>Vehicles</NavLink></li>
                </ul>
            </nav>

            <main>
                <Outlet/>
            </main>
            </>
        );
    }
}

export default Log;
