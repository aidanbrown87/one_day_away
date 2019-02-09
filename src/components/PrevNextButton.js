import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import style from './prevnextbutton.module.css'

import planeIcon from './plane-icon-right.png'

const PrevNextButton = ({ isPrev, linkObject }) => {
  if (!linkObject) {
    return <span />
  }

  const content = [
    <img
      key='img'
      src={planeIcon}
      alt="planeIcon"
      style={{
        width: 35,
        height: 35,
        margin: 0,
        transform: `${isPrev ? ' scaleX(-1)' : ''}`,
      }}
    />,
    <span key='title'>{linkObject.frontmatter.title}</span>
  ]
  return ( linkObject &&
    <Link className={style.button} to={linkObject.fields.slug} key={isPrev ? 'prev' : 'next'} rel={isPrev ? 'prev' : 'next'}>
      { isPrev ? content : content.reverse() }
    </Link>
  );
};

PrevNextButton.propTypes = {
  isPrev: PropTypes.bool,
  linkObject: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    })
  })
};

export default PrevNextButton;