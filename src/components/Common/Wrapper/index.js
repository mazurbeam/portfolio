import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from 'rebass'


const WrapperOuter = styled.section`
  position: relative;
  padding: 56.25% 0 0;
  width: 100%;
  height: 0;
  @media (max-width: 414px) {
    padding: 178% 0 0;
    padding: 100vh 0 0;
  }
`;

const WrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({bg}) => bg};
  ${({ isHome }) => (isHome ? '' : 'padding: 100px 0 0;')}
`;

const Wrapper = ({
  children, bg, color, ...rest
}) => (
  <WrapperOuter>
    <WrapperInner bg={bg} color={color} {...rest}>
      {children}
    </WrapperInner>
  </WrapperOuter>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  bg: PropTypes.string,
  color: PropTypes.string
};

Wrapper.defaultProps = {
  children: null,
  bg: '#fff',
  color: '#0a0a0a'
};

export default Wrapper;
