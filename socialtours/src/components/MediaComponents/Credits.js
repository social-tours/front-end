import React, { Component } from "react";
import marked from "marked";

import * as S from './CreditStyles'

const renderer = new marked.Renderer();

/**
 * Method to render hyperlinks
 * to open up in new tab/page
 */
renderer.link = (href, title, text) =>
	`<a target="_blank" href="${href}" title="${title}">${text}</a>`;

class Credits extends Component {
	state = { content: "" };

	/**
	 * Method for importing contents
	 * of markdown file
	 * @param {string} content
	 * @returns setState with content
	 */
	getContent = async (content) => {
		try {
			const newContent = await fetch(content);
			this.setState({ content: await newContent.text() });
		} catch (err) {
			console.log("Error fetching content: ", err);
		}
	}

	componentDidMount() {
		const content = require("./MEDIA.md");
		this.getContent(content);
	}

	render() {
		return (
			<S.Wrapper>
				<S.Table
					className=""
					dangerouslySetInnerHTML={{
						__html: marked(this.state.content, { renderer })
					}}
				></S.Table>
			</S.Wrapper>
		);
	}
}

export default Credits;
