import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import FaHome from 'react-icons/lib/fa/home';

import { Menu } from 'antd';
import { flow, isEmpty, isEqual, filter, map, uniq, get, size, toLower, replace, startsWith } from 'lodash/fp';



const Home = styled(FaHome)`
  font-size: 40px;
`;


const Gnb = ({
  location,
  categories,
  postInformations,
  hasPortfolio,
  navigateToPath,
  inputKeyword,
  searchKeyword,
  isMenuOpened,
  openMenu,
  closeMenu,
  isSubMenuOpened,
  openSubMenu,
  closeSubMenu,
}) => {
  const filteredPosts = !isEmpty(searchKeyword)
    ? filter(({ category = '', title = '', tags = [] }) => {
      const c = toLower(category);
      const h = toLower(title);
      const t = map(toLower)(tags);

      const searchedWithCategory = c.search(searchKeyword) !== -1;
      const searchedWithTitle = h.search(searchKeyword) !== -1;
      const searchedWithTags = flow(
        filter(t => (t.search(searchKeyword) !== -1)),
        filtered => !isEmpty(filtered)
      )(t);

      return searchedWithCategory || searchedWithTitle || searchedWithTags;
    })(postInformations)
    : [];
  const { pathname } = location;
  const isPortfolio = flow(
    replace(/\/$/, ''),
    startsWith('/portfolio')
  )(pathname);
  const isHome = flow(
    replace(/\/$/, ''),
    isEqual('')
  )(pathname);
  const isResume = flow(
    replace(/\/$/, ''),
    isEqual('/resume')
  )(pathname);
  const isContact = flow(
    replace(/\/$/, ''),
    isEqual('/contact')
  )(pathname);
  const isPost = !(isPortfolio || isHome || isResume || isContact);

  return (
    <Menu
      theme="dark"
      mode={'horizontal'}
    >
      {/*<MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuOpened}>*/}
        {/*<Background onClick={closeMenu} isActive={isMenuOpened} />*/}
        {/*<MobileMenus>*/}
        {/*  <ul>*/}
            <Menu.Item key={''}>
              <Link to="/">
                <Home />
              </Link>
            </Menu.Item>

            {hasPortfolio ? (
              <Menu.Item>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </Menu.Item>
            ) : null}
            <Menu.Item>
              <Link to="/resume" >
                Resume
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact">
                Contact
              </Link>
            </Menu.Item>


      {/*    </ul>*/}
      {/*  </MobileMenus>*/}
      {/*</MobileMenu>*/}
      {/*<Hamburger*/}
      {/*  className={`hamburger hamburger--spin js-hamburger ${isMenuOpened ? 'is-active' : ''}`}*/}
      {/*  onClick={isMenuOpened ? closeMenu : openMenu}*/}
      {/*>*/}
      {/*  <div className="hamburger-box">*/}
      {/*    <div className="hamburger-inner" />*/}
      {/*  </div>*/}
      {/*</Hamburger>*/}
      {/*<ul>*/}
      {/*  <ListMenu>*/}
      {/*    <StyledHomeLink to="/">*/}
      {/*      <Home />*/}
      {/*    </StyledHomeLink>*/}
      {/*  </ListMenu>*/}
      {/*  */}
      {/*  {hasPortfolio ? (*/}
      {/*    <ListMenu>*/}
      {/*      <StyledLink to="/portfolio" className={isPortfolio ? 'active' : ''}>*/}
      {/*        Portfolio*/}
      {/*      </StyledLink>*/}
      {/*    </ListMenu>*/}
      {/*  ) : null}*/}
      {/*  <ListMenu>*/}
      {/*    <StyledLink to="/resume" className={isResume ? 'active' : ''}>*/}
      {/*      Resume*/}
      {/*    </StyledLink>*/}
      {/*  </ListMenu>*/}
      {/*  <ListMenu>*/}
      {/*    <StyledLink to="/contact" className={isContact ? 'active' : ''}>*/}
      {/*      Contact*/}
      {/*    </StyledLink>*/}
      {/*  </ListMenu>*/}

      {/*</ul>*/}
    </Menu>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  postInformations: PropTypes.arrayOf(PropTypes.shape({})),
  hasPortfolio: PropTypes.bool.isRequired,
  navigateToPath: PropTypes.func.isRequired,
  inputKeyword: PropTypes.func.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isSubMenuOpened: PropTypes.bool.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  closeSubMenu: PropTypes.func.isRequired,
};

Gnb.defaultProps = {
  categories: [],
  postInformations: [],
};

export default Gnb;
