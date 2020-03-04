import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { flow, slice, map, includes, get, size, isEmpty, isArray, first } from 'lodash/fp';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';
import ParticlesWrapper from '~/components/Common/ParticlesWrapper';
import {colors} from '~/theme';

import ContactForm from '~/components/Common/Form/ContactForm';

import { Typography } from 'antd';

const { Title } = Typography;


const SubTitle = styled.h2`
  //@import url("https://fonts.googleapis.com/css?family=Ralewayt");
  position: absolute;
  top: 4em;
  bottom: 0;
  color: ${colors.primaryColor};
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 58px;
  font-size: 5vw;
  font-family: 'Raleway' sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;


const Home = ({ portfolios }) => (
  <Fragment>
    <Wrapper isHome bg={colors.bg} color={colors.primaryColor}>
      {/*<ParticlesWrapper/>*/}
      <Title>
        Walter Mazur
      </Title>
      <SubTitle>
        Full Stack Developer
      </SubTitle>
      <Helmet>
        <title>
          Walter Mazur
        </title>
        <meta name="og:title" content="I'm Mazurbeam!" />
      </Helmet>
    </Wrapper>
    {size(portfolios) >= 4 ? (
      <SimpleWrapper>
        {flow(
          slice(0, 4),
          map((edge) => {
            const portfolio = get('node.frontmatter')(edge);
            const { path, title, images } = portfolio;
            const image = isArray(images) ? first(images) : null;

            if (!isEmpty(image)) {
              return (
                <PortfolioCard key={path}>
                  <Link to={path}>
                    {includes('//')(image) ? (
                      <img src={image} alt="portfolio" />
                    ) : (
                      <img src={require(`~/resources/${image}`)} alt="portfolio" />
                    )}
                    <h6>
                      {title}
                    </h6>
                  </Link>
                </PortfolioCard>
              );
            }

            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h4>
                    {title}
                  </h4>
                </Link>
              </PortfolioCard>
            );
          })
        )(portfolios)}
      </SimpleWrapper>
    ) : null}
    <SimpleWrapper>
      <ContactForm/>
    </SimpleWrapper>
  </Fragment>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
