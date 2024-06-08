import styled from "styled-components";

export const CartArea = styled.div`
    div {
        height:200px;
        width: 1000px;
        border: 1px solid rgb(232, 232, 232);
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding: 0px 40px;
        margin: 20px 0 0 0;
        background-color: #ffff;
        text-align: left;

        img {
            max-height: 80%; 
            // height: auto;   
        }
        
        button {
            height: 40px;
            width: 40px;
            font-size: 25px;
            background: red;
            border: none;
            color: #ffff;
            border-radius: 50%;
        }
    }

`
export const DivFinal = styled.div`
        height:180px;
        width: 500px;
        border: 1px solid rgb(232, 232, 232);
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 50px;
        margin: 20px 0 0 0;
        background-color: #ffff;
        text-align: left;
        
        button {
            font-size: 25px;
            border: none;
            color: #ffff;
            background-color: green;
            border-radius: 10px;
            padding: 10px
        }

    `