import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 20px;
    background: var(--mainDark);
    border; 2px solid var(--mainWhite);
    color: ${props => props.cart? "var(--mainYellow)":"var(lightBlue)" };
    border-radius: 5px;
    border-color: 2px solid var(--mainWhite);

    padding: 0.2rem 0.5rem;
    cursor: pointer;
    
    transition:all 0.2s ease-in-out;
    &:hover{
        background: ${props => props.cart? "var(--mainDark)":"var(--lightGrey)"};
        color: var(--mainDark);
        border-color: 2px solid var(--mainWhite);

    }
    &:focus{
        outline: none;
        
    }
    

`;