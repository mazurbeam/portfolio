/* Common Styled Components used by other components */

import styled from 'styled-components';
import { Box, Text } from 'rebass';

export { default as Toolbar } from './Toolbar';
export { default as BackgroundImage } from './BackgroundImage'
/* This file contains commonly used styling attributes for the 
Styled Components implementation of this project. */
export const Container = styled(Box)`
  max-width: 1024px;
  diplay: inline-flex;
`;

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #f6f5f6;
  background-size: cover;
`;

Container.defaultProps = {
  mx: 'auto'
};

export const CardTitle = styled(Box)({
  borderBottom: '1px solid #E2E2E2',
  padding: '10px'
});

export const TitleText = styled(Text)({
  display: 'inline-block',
  width: '95%'
});

export const SubTitle = styled(Text)({
  fontSize: '0.6em',
  color: '#898989',
  fontWeight: 'bold'
});

export const Details = styled(Box)({
  borderTop: '1px solid #f6f5f6'
});
