import React from 'react';
import PropTypes from 'prop-types';

const HomeLayout = ({ children }) => {
  return (
      <div className="home__layout__container">
        {children}
      </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node
};

export default HomeLayout;