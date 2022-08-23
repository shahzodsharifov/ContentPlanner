import styled from "styled-components";

export const BodydWrap = styled.div`

    @media only screen and (min-width: 1000px) {
        width: 85%;
        background-color: #0F0F2D ;
        height: 100%;
        padding: 20px 100px;

        .bodyHeader {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .bodyStatus {
            color: white;
            font-size: 36px;
        }

        .newPlanBtn {
            width: 16vw;
            height: 5.5vh;
            background-color: #2EC76E;
            border-radius: 6px;
            font-size: 18px;
            color
        }
    }
`