import React, { Component } from 'react'
import {Link} from "react-router-dom";
import logo from '../logo.svg';
import { domainToASCII } from 'url';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import "./componenetsStyle.css"

//1.15.00 de kaldım
export default class Navbar extends Component{

    render(){
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            
               <Link to = '/'>
               {/* <img src={logo} alt="store" className="navbar-brand"/> */}

               </Link>
               <ul className="navbar-nav">
                   <li className="nav-item ml-3">
                    <Link to = "/" className="nav-link">
                        PetroPrime
                    </Link>

                   </li>
               </ul>
               <Link to='/cart' className="cartButton">
                   <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                       Cart 
                    </span>
                     
                   </ButtonContainer>

               </Link>
               <Link to='/Customer/Login' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                       CLogin
                    </span>
                   </ButtonContainer>
               </Link>
               <Link to='/Customer/Register' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                       CSignUp
                    </span>
                   </ButtonContainer>
               </Link>
               <Link to='/Supplier/Login' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                       SLogin
                    </span>
                   </ButtonContainer>
               </Link>
               <Link to='/Supplier/Register' className="ml-auto">
                   <ButtonContainer>
                    <span className="mr-2">
                       SSignUp
                    </span>
                   </ButtonContainer>
               </Link>




           </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 20px;
    text-transform: capitalize;
    
}

`;