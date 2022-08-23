import styled from "styled-components";

export const CardWrap = styled.div`

    @media only screen and (min-width: 1000px) {
        width: 27.2vw;
        height: auto;
        border: 1px solid rgb(255, 255, 255, 0.5);
        padding: 20px 20px;
        border-radius: 4px;
       
        .cardTitle {
            color: white;
            font-size: 24px;
        }

        .cardType {
            margin-top: 16px;
            opacity: 0.65;
            color: white;
        }

        .cardSubtitle {
            margin-top: 8px;
            font-size: 18px;
            color: white;
        }

        .cardLine {
            margin-top: 20px;
            background-color:rgb(255, 255, 255, 0.5);
            width: 100%;
            height: 1px;
        }
        .bottomCard {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        .cardBtn {
            width: 160px;
            height: 44px;
            font-size: 16px;
            color: #0F0F2D;
            background-color: white;
            border-radius: 4px;

        }


        .dates {
            color: white;
            font-size: 16px;
            font-weight: 550;
        }
    } 
`