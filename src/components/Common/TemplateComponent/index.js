import React, { Component } from "react";
import PropTypes from "prop-types";

class TemplateComponent extends Component {
  constructor(props) {
    super(props)
    this.html = require(props.template)
  }

  render() {
    return <div dangerouslySetInnerHTML={{__html: this.html}}/>
  }
}

TemplateComponent.propTypes = {
  template: PropTypes.string.isRequired
};

export default TemplateComponent;
