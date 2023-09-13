import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 20px;
    background: var(--mainWhite);
    border; 2px solid var(--mainWhite);
    color: ${props => props.cart? "var(--mainYellow)":"var(lightBlue)" };
    border-radius: 5px;
    border-color: ${props => props.cart? "var(--mainDark)":"var(--mainDark)"};

    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition:all 0.2s ease-in-out;
    &:hover{
        background: ${props => props.cart? "var(--mainDark)":"var(--lightGrey)"};
        color: var(--mainDark);

    }
    &:focus{
        outline: none;
        
    }
    

`;