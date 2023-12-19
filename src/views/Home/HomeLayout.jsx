import React from 'react';
import PropTypes from 'prop-types';

const HomeLayout = ({ children }) => {
  const leftChildren = [];
  const rightChildren = [];

  React.Children.forEach(children, child => {
    if (child.props.column === 'left') {
      leftChildren.push(child);
    } else if (child.props.column === 'right') {
      rightChildren.push(child);
    }
  });

  return (
    <div className="home__layout__container">
      <div className="home__left">
        {leftChildren}
      </div>
      <div className="home__right">
        {rightChildren}
      </div>
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node
};

export default HomeLayout;