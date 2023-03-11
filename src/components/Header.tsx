import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonStyled from '../styles/ButtonStyle';

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-family: 'Poppins', sans-serif;

    ul{
        list-style-type: none;
        display: flex;
        gap: 3rem;
    }

    li{
        color: #e2e2e2;
        font-weight: bold;
        font-size: 13px;
    }
    
    li:hover{
        color: #333333;
    }

    div{
        display: flex;
        gap: 2rem;
    }

    .link{
        text-decoration: none;
        color: inherit;
    }

    .link-active{
      color: #333333;
      text-decoration: none;
    }

    @media(max-width: 768px) {
      
        justify-content: center;

        div{
            display: none;
        }

        ul{
          display: none;
        }
    }
`

function Header() {
  return (
    <div>
      <HeaderStyle>
        <NavLink to='/' className='link'><h2>Bloger</h2></NavLink>

        <ul>
          <li>
            <NavLink to='/' className={ (obj) => obj.isActive ? 'link-active' : 'link'}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className={ (obj) => obj.isActive ? 'link-active' : 'link'}>
              Add Post
            </NavLink>
          </li>
        </ul>

        <div>
          <NavLink to='/sign-up'>
            <ButtonStyled>Sign Up</ButtonStyled>
          </NavLink>
          <NavLink to='/sign-in'>
            <ButtonStyled>Log In</ButtonStyled>
          </NavLink>
        </div>
      </HeaderStyle>
    </div>
  )
}

export default Header;