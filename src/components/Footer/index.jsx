import React from 'react';
import styled from 'styled-components';
import {Github} from 'styled-icons/fa-brands/Github'
import {Linkedin} from 'styled-icons/fa-brands/Linkedin'
// import { PRIMARY_COLOR, SECONDARY_COLOR } from '~/components/Common/constants';
import {primary as PRIMARY_COLOR, secondary as SECONDARY_COLOR} from '~/theme'
const StyledGithub = styled(Github)`
  height: 35px;
  margin-right: 20px;
`;

const StyledLinkedin = styled(Linkedin)`
  height: 35px;
`;

const ListMenu = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 0 0 2em;
  font-weight: 500;
 

  a {
    color: #000;
  }

  ul {
    max-height: 0;
    white-space: nowrap;
  }

  &:hover {
    ul {
      max-height: 360px;
    }
  }

  small {
    font-size: 12px;
  }
`;

const StyledExternalLink = styled.a`
  &.active {
    color: ${PRIMARY_COLOR};
    text-decoration: underline;
  }

  &:hover {
    color: ${SECONDARY_COLOR};
    text-decoration: underline;
  }
`;


const FooterWrapper = styled.section`
  padding: 10px 0;
  height: 60px;
  color: #000;
  background-color: #eee;
  font-size: 11px;
  font-weight: 500;
  text-align: center;

  a {
    color: #000;
    font-weight: 700;
  }
`;

const Footer = () => (
  <FooterWrapper>

      <StyledExternalLink href='https://github.com/mazurbeam' target='_blank'>
        <StyledGithub/>
      </StyledExternalLink>
      <StyledExternalLink href='https://www.linkedin.com/in/walter-mazur-02803453/' target='_blank'>
        <StyledLinkedin/>
      </StyledExternalLink>
  </FooterWrapper>
);

export default Footer;
