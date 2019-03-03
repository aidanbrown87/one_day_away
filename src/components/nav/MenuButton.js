import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const MenuButton = ({ onClick, className }) => {
  const [active, setActive] = useState(false)

  function click() {
    setActive(!active)
    onClick()
  }

  const cn = classnames(className, { "active": active })

  return (
    <button
      onClick={click}
      className={cn}
    >
      <div className="bar top" />
      <div className="bar middle" />
      <div className="bar bottom" />
    </button>
  )
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default styled(MenuButton)`
  &:focus {
    outline: none;
    .bar {
      background: green;
    }
  }
  & .bar {
    z-index: 100;
    display: block;
    height: 3px;
    width: 20px;
    background: grey;
    margin: 3px auto;
    transition: all 0.7s ease;
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
`
