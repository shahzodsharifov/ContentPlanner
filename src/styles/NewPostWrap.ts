import styled from "styled-components"


export const NewPostWrap = styled.div`

    @media only screen and (min-width: 1000px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        padding: 40px 400px;
        z-index: 100;
        backdrop-filter: blur(4px);
       
       

        .newPostContent{
            width: 100%;
            height: 100%;
            border-radius: 12px;
            padding: 40px 60px;
            background-color: #F0F3FF;
        }

        .postTitleInput {
            margin-top: 40px;
            width: 100%;
            height: 54px;
            border: 1px solid #404073;
            padding: 20px;
            font-size: 20px;
            background-color: transparent;
            border-radius: 8px;
        }

        .postDescInput {
            margin-top: 20px;
            width: 100%;
            height: 300px;
            border: 1px solid #404073;
            font-size: 20px;
            background-color: transparent;
            border-radius: 8px;
            padding: 20px;
            resize: none;
        


          
        }

        .choices {
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .postTypeSelect {
            margin-top: 12px;
            width: 120px;
            height: 40px;
            border: 1px solid #404073;
            font-size: 16px;
            background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
            background-position: calc(100% - 12px) center !important;
            border-radius: 8px;
            resize: none;
            padding: 0px 12px;
            appearance:none;
        }

        .newPostDate{
            margin-top: 12px;
            width: 180px ;
            height: 40px;
            border: 1px solid #404073;
            font-size: 16px;
            background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
            background-position: calc(100% - 12px) center !important;
            border-radius: 8px;
            resize: none;
            padding: 0px 12px;
            appearance:none;
        }

        .btnActs {
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }

        .subBtn {
            width: 200px;
            height: 48px;
            border: 1px solid #404073;
            font-size: 20px;
            background-color: #404073;
            border-radius: 8px;
            padding: 4px;
            color: white;
        }

        .cancelBtn {
            width: 200px;
            height: 48px;
            border: 1px solid #404073;
            font-size: 20px;
            background-color: transparent;
            border-radius: 8px;
            padding: 4px;
        }
    }

`