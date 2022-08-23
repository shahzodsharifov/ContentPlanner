import styled from "styled-components"


export const DetailWrap = styled.div`

    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;

        background-color: #0F0F2D;
       .details {
        width: 85%;
        height: 100vh;
        padding: 20px 100px;
       }

        h1 {
            color: white
        }
        .planTitle {
            color: white
        }

        .planDesc {
            color: white;
        }
    }
`