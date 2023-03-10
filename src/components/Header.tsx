import React from 'react'
import { Link, Outlet } from 'react-router-dom';
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

    @media(max-width: 768px) {
        div{
            display: none;
        }
    }
`

function Header() {
  return (
    <div>
      <HeaderStyle>
        <Link to='/' className='link'><h2>Bloger</h2></Link>

        <ul>
          <li><Link to='/' className='link'>Overview</Link></li>
          <li><Link to='/' className='link'>Add Post</Link></li>
        </ul>

        <div>
          <Link to='/sign-up'><ButtonStyled>Sign Up</ButtonStyled></Link>
          <Link to='/sign-in'><ButtonStyled>Log In</ButtonStyled></Link>
        </div>
      </HeaderStyle>
      <Outlet />
    </div>
  )
}

export default Header;