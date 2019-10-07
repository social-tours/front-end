import React from "react";
import styled from "styled-components";

class Search extends React.Component {
	state = {
		results: []
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.results != this.props.results) {
			this.setState({
				results: this.fetchResults
			});
		}
	}

	render() {
		if (this.state.results.length === 0)
			return (
				<SearchBar />
			);

		return (
            <Section>
                <SearchBar />
                <SearchResults />
            </Section>
		);
	}
}

const Section = styled.div``;
const SearchBar = styled.input``;

export default Search;