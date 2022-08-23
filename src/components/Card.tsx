import React, { FunctionComponent } from "react";
import { CardWrap } from "../styles/CardWrap";
import { Link } from "react-router-dom";


    type CardProps = {
        id: number;
        title: string;
        description: string,
        platform: string,
        deadline: string
    }

    export const Card = ({id,title, description, platform, deadline} : CardProps) => {
        var mockDesc = " "
        var str: string[] = description.split(" ")
        if(str.length >=16) {
            mockDesc = str.slice(0,16).join(" ")
        } else {
            mockDesc = str.join(" ")
        }

      
        return (
           <CardWrap>
            <h1 className="cardTitle">{title}</h1>
            <p className="cardType">{platform}</p>
            <p className="cardSubtitle">{mockDesc} ...</p>
            <div className="cardLine"></div>
           <div className="bottomCard">
            <Link to="/planDetail" state={id}>
            <button className="cardBtn">Tekshirish</button>
            </Link>
           <p className="dates">Deadline: {deadline}</p>
           </div>
           </CardWrap>
        )
    }

