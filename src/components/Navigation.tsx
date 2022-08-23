import React from "react";
import { NavigationWrap } from "../styles/NavigationWrap";
import { Link } from "react-router-dom";


export const Navigation = () => {
    return (
        <NavigationWrap>
           <Link to="/">
            <p>Planlar</p>
           </Link>
           <Link to="/">
            <p>Yangi Plan</p>
           </Link>
        </NavigationWrap>
    )
}