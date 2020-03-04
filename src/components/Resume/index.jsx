import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
// import { Document, Page } from "react-pdf";
//
// import FaPinrt from "react-icons/lib/fa/print";
// import FaGithub from "react-icons/lib/fa/github";
import { Flex, Button } from "rebass";
// import FaFacebook from "react-icons/lib/fa/facebook";
// import FaTwitter from "react-icons/lib/fa/twitter";
// import FaLinkedin from "react-icons/lib/fa/linkedin";
// import { forEach, startsWith, get } from "lodash/fp";
import Clearfix from "~/components/Common/Clearfix";
import * as profileUrl from "~/resources/me.jpg";
import HtmlPage from "~/resources/resume/resume.html";

var htmlDoc = {__html: HtmlPage};

const Wrapper = styled.section`
  padding: 100px 0 0;
  color: ${props => props.theme.colors.primary};
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  & > ${Clearfix} {
    margin: auto;
    //max-width: 640px;
  }

  button {
    float: right;
  }
 
`;

const BasicInformation = styled.section`
  text-align: center;
  font-size: 16px;

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  p {
    margin: .67em 0;
  }

  img {
    border-radius: 50%;
  }
`;

const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;

  a {
    padding: 0 6px;
  }
`;

const MDInformation = styled.section`
  font-size: 16px;

  h2 {
    font-size: 1.5em;
    margin: .67em 0;
  }

  ul {
    margin: 16px 0 0;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
  }

  li ul {
    margin: 0 0 16px;;
    padding: 0 0 0 20px;
    list-style: circle;
  }
  table {
    width: 100%;
  }
  th {
    // margin: 16px 0 0;
    width: 25%;
    // border-bottom: 1px solid black;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
    text-align: left;

  }

  td {
    margin: 16px 0 0;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
    text-align: left;
  }

  a {
    text-decoration: underline;
  }
`;

class Resume extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({ date: PropTypes.object }).isRequired,
    printPage: PropTypes.func.isRequired

  };


  render() {

    return (
      <Wrapper>
        <Clearfix>
          <Helmet>
            <title>
              MAZURBEAM | RESUME
            </title>
            <meta name="og:title" content="MAZURBEAM | RESUME"/>
          </Helmet>
          <Clearfix>
            <Flex flexWrap={"wrap"} justifyContent={"flex-end"} p={1}>
              <a href='https://mazurbeam.s3-us-west-2.amazonaws.com/Walter_Mazur_resume.pdf' target="_blank">
                <Button type="button">
                  Download
                </Button>
              </a>
            </Flex>
          </Clearfix>
          <BasicInformation>
            <img
              src={profileUrl.default}
              alt=""
              width="120"
              height="120"
            />

          </BasicInformation>

          <div dangerouslySetInnerHTML={htmlDoc} />

        </Clearfix>
      </Wrapper>
    );
  }
}

export default Resume;
