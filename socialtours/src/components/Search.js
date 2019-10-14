import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { API_ENDPOINT } from '../config/api';

class Search extends React.Component {
	state = {
		results: [],
		search: 'Search for an influencer'
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.results != this.state.results) {
			this.fetchResults();
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			search: e.target.value
		})
	}

	fetchResults = e => {
		e.preventDefault();
		axios.get(API_ENDPOINT + `/api/search/${this.state.search}`)
			.then(res => {
				this.setState({
					results: res.data
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
					<SearchBar placeholder="Search for an influencer"
						name="search"
						value={this.state.search}
						onChange={this.handleChange} />
					<SearchResults
					/>
					<SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
				</Section>
			);

		return (
			<Section>
				<SearchBar placeholder="Search for an influencer"
					name="search"
					value={this.state.search}
					onChange={this.handleChange} />
				<SearchResults
				/>
				<SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
				<SearchResults >
					{this.state.results && this.state.results.map(result => <SearchResult {...result} />)}
				</SearchResults>
			</Section>
		);
	}
}

const Section = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
    height: 140px;
    margin: 0 auto;
    align-items: center;`;
const SearchBar = styled.input``;
const SearchBtn = styled.span`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    margin-top: 5px;
    outline: .5px solid black;
    padding: 2x;
`;
const SearchResults = styled.div``;
const SearchResult = styled.div``;

export default Search;