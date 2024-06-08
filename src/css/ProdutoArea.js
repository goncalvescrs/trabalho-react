import { styled } from 'styled-components';
export const ProdutoArea = styled.div`
    Link {
            background: red;
            color: red;
        }

    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    div {
        height:320px;
        width: 230px;
        border: 1px solid rgb(194, 193, 193);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        img {
            width: 50%;
        }
        
        button {
            font-size: 15px;
            background: green;
            border: none;
            color: #ffff;
        }
    }

`


