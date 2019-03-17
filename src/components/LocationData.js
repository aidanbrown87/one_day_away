import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 5px;
  border: none;
  font-size: 0.9em;
`;

const LocationData = ({ country, region }) => {
  return (
    <div>
      <StyledLink to={region} className="">
        <b>{region}</b>
      </StyledLink>
      |
      <StyledLink to={country} className="">
        {country}
      </StyledLink>
    </div>
  );
};

LocationData.propTypes = {
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default LocationData;