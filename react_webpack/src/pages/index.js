import React from 'react';
import MarkdownIt from 'markdown-it';
import TestMarkdown from '../test.md';

const md = new MarkdownIt();

class Index extends React.Component {
  render() {
		const result = md.render(TestMarkdown);
		console.log(result);
		console.log(md);
	  return (
			<div>
			  <div dangerouslySetInnerHTML={{__html:result}} />
				<h1>This is Index page.</h1>
			</div>
		);
	}
}

export default Index;
