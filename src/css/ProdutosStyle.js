import { styled } from 'styled-components';

export const ProdutosStyle = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    color: #1d1d1d ;

    div {
        width: 220px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        background-color: #ffff;
        position: relative;

        a{
            display: block;
            width: 100%;
            height: 100%;
            textDecoration: none;
            color: red;
            position: absolute;
            top: 0;
            left: 0;
            zIndex: 2;   
            &:hover {
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.283); 
                border-radius: 10px;
            }
        }

        p {
            font-size: 12px;
            color: green;
        
        }

        nomeCateg {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {    
            font-size: 15px;
            font-weight: 200;
        }

        h4 {
            font-size: 20px;
            font-weight: 250;
        }

        h5 {
            font-size: 15px;
            font-weight: 3000;
            color: green;
            padding-top: 5px;
        }
        
        button {
            font-size: 15px;
            background: green;
            border: none;
            color: #ffff;
        }
    }

`