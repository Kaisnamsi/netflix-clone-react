import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  // Remove or comment out the button element
  return (
    <HeaderContainer>
      {/* Remove or comment out this button */}
      {/* <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In ' : 'Sign In'}
      </button> */}
    </HeaderContainer>
  );
}

// ...rest of your code
