import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { Menu } from 'antd';
const BackButtonIcon = styled(FaAngleLeft)`
  display: none;
`;

const HeaderWrapper = styled.section`
`;

const StyledLink = styled(Link)`
`;

const Header = ({ historyGoBack }) => (
  <Menu>
    <BackButtonIcon onClick={historyGoBack} />
    <StyledLink to="/">
      Home
    </StyledLink>
  </Menu>
);

Header.propTypes = {
  historyGoBack: PropTypes.func.isRequired,
};

export default Header;
