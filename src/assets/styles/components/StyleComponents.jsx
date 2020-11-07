import styled from '@emotion/styled';

export const Button = styled.button`
    background:  #0f574e;
    background-size: 200px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    border :2px solid black;
    border-radius: 10px;
    transition: all .8s ease;
    outline: none;
    box-shadow: 3px 3px 6px #333333;
    
    :hover{
        cursor: pointer;
        background-size: 400px;
    }

    :active{
        transform: scale(.8);
        background: #007d35;
        box-shadow: 3px 3px 6px #333333, -3px -3px 6px #333333
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`;

export const PhraseContainer = styled.div`
    padding: 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 2rem;
    box-shadow: 6px 6px 8px #333333, -6px -6px 8px #333333;

    @media (min-width: 992px){
        margin-top: 3rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 1rem;

        &::before{
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: 1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        text-align:  right;
        color: #666;
        margin-top: 2rem;

    }
`;