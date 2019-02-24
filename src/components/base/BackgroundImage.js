import React from 'react';
import { Flex, Card } from 'rebass';
import PropTypes from 'prop-types';

const BackgroundImage = ({ children, src, bg, color, ...rest }) => {
  return (
    <Card
      p={0}
      py={0}
      backgroundImage={src && `url(${src})`}
      backgroundSize='cover'
      borderRadius={0}
      color={color}
      bg={bg}
      style={{
        minHeight: '100vh'
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

BackgroundImage.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string
};

BackgroundImage.defaultProps = {
  src: undefined,
  bg: 'grey',
  color: 'white'
};

export default BackgroundImage;