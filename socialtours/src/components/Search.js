import React from "react";
import styled from "styled-components";
import axios from 'axios';
import API_ENDPOINT from '../config/api';

class Search extends React.Component {
	state = {
        results: [],
        search: ''
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.results != this.props.results) {
			this.setState({
				results: this.fetchResults
			});
		}
	}

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fetchResults = _ => {
        axios.get(API_ENDPOINT)
        .then(res => {
            this.setState({
                results : res.data
            })
        })
        .catch(e => {
            console.log(e);
        })
    };

	render() {
		if (this.state.results.length === 0)
			return (
				<Section>
                    <SearchBar />
                    <SearchResults placeholder="Search for an influencer"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleChange} 
                    />
                    <SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
                </Section>
			);

		return (
            <Section>
                <SearchBar />
                <SearchResults placeholder="Search for an influencer"
                               name="search"
                               value={this.state.search}
                               onChange={this.handleChange} 
                />
                <SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
                <SearchResults >
                    {this.state.results && this.state.results.map(result => <SearchResult {...result} />)}
                </SearchResults>
            </Section>
		);
	}
}

const Section = styled.div``;
const SearchBar = styled.input``;
const SearchBtn = styled.span``;
const SearchResults = styled.div``;
const SearchResult = styled.div``;

export default Search;