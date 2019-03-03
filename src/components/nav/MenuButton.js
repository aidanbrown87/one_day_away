import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuButton = ({ onClick, className }) => {
  const [active, setActive] = useState(false);

  function click() {
    setActive(!active);
    onClick()
  }

  return (
    <button onClick={click} className={`con ${className} ${active ? "active" : ""}`}>
      <div className="bar top"></div>
      <div className="bar middle"></div>
      <div className="bar bottom"></div>
    </button>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func,
};

export default styled(MenuButton)`
  & .bar {
    z-index: 100;
    display: block;
    height: 3px;
    width: 20px;
    background: grey;
    margin: 3px auto;
    transition: all .7s ease;
  }

  &.active {
    .top {
      transform: translateY(6px) rotateZ(45deg);
    }
    .bottom {
      transform: translateY(-6px) rotateZ(-45deg);
    }
    .middle {
      width: 0;
    }
  }
`;