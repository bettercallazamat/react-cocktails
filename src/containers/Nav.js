import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ back }) => (
  <div className="Nav">
    <Link to="/" title="World Data Home Page">
      LOGO
    </Link>
    { back && <Link to="/" title="Back to Main Page">&lt; Back to Main Page</Link> }
  </div>
);

Nav.propTypes = {
  back: PropTypes.bool,
};

Nav.defaultProps = {
  back: false,
};

export default Nav;
