/* eslint-disable no-unused-vars */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class HtmlComponent extends React.Component {
  render() {
    const html = '<div>Example HTML string</div>';
    return <div>{ReactHtmlParser(html)}</div>;
  }
}

export default HtmlComponent;
