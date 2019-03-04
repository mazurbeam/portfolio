import React, { Component } from 'react';
import bg from '~/constants/theme'
const stylesStr = require('!raw-loader!./reset.css');

export default class HTML extends Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html {...htmlAttributes} lang="ko">
        <head>
          {headComponents}
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
          <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
          <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
          <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta id="viewport" name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <meta name="description" content="Walter Mazur, Full Stack Developer, Portfolio Site" />
          <meta name="keywords" content="Walter Mazur, Mazurbeam, Portfolio, Full Stack Developer, Frontend Developer, React.js, Javascript, Python" />
          <meta name="author" content="wonism" />
          <meta property="og:title" content="Mazurbeam" />
          <meta property="og:site_name" content="Mazurbeam.com" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="" /> */}
          {/* <meta property="og:image" content="" /> */}
          <meta property="og:description" content="Walter Mazur, Full Stack Developer, Portfolio Site" />
          <meta property="og:locale" content="ko_KR" />
          {/* <meta name="msapplication-TileImage" content="" /> */}
          {/* <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="" /> */}
          {/* <link rel="apple-touch-icon" type="image/vnd.microsoft.icon" href="" /> */}

          <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
