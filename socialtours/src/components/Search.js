import React from "react";
import styled from "styled-components";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_ENDPOINT } from "../config/api";

import SubscriptionCard from "./ManageEvents/SubscriptionCard.js";

class Search extends React.Component {
	state = {
		results: [],
		search: ""
	};

	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	if (prevState.results != this.state.results) {
	// 		this.fetchResults();
	// 	}
	// }

	handleChange = e => {
		e.preventDefault();
		this.setState({
			search: e.target.value
		});
	};

	fetchResults = e => {
		e.preventDefault();
		axios
			.get(API_ENDPOINT + `/api/search/${this.state.search}`)
			.then(res => {
				this.setState({
					results: res.data
				});
			})
			.catch(e => {
				console.log(e);
			});
	};

	subscribe = (e, influencer_id) => {
		e.preventDefault();

		axios
			.post(API_ENDPOINT + `/api/subscriptions`, {
				user_id: this.getUserId().id,
				influencer_id
			})
			.then(res => {
				this.setState({});
			})
			.catch(error => {
				console.log(error);
			});
	};

	getUserId() {
		if (localStorage.getItem("api_token")) {
			return jwtDecode(localStorage.getItem("api_token"));
		}
	}

	render() {
		console.log("This State HURR: ", this.state);
		if (this.state.results.length === 0)
			return (
				<Section>
					<SearchBar
						placeholder="Search for an influencer"
						name="search"
						value={this.state.search}
						onChange={this.handleChange}
					/>
					<SearchResults />
					<SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
				</Section>
			);

		return (
			<Section>
				<SearchBar
					placeholder="Search for an influencer"
					name="search"
					value={this.state.search}
					onChange={this.handleChange}
				/>
				<SearchResults />
				<SearchBtn onClick={this.fetchResults}>Search</SearchBtn>
				<SearchResults>
					{this.state.results &&
						this.state.results.map(result => {
							return (
								<div key={result.id}>
									<SearchResult>
										{`
								FirstName: ${result.first_name}
								${result.last_name}
								`}
									</SearchResult>
									<button onClick={e => this.subscribe(e, result.id)}>
										Subscribe to Me
									</button>
								</div>
							);

							// return (
							// 	<SubscriptionCard
							// 		id={result.id}
							// 		key={result.id}
							// 		firstName={result.first_name}
							// 		lastName={result.last_name}
							// 		userId={result.id}
							// 		influencerId={result.influencer_id}
							// 	/>
							// );
						})}
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
	align-items: center;
`;
const SearchBar = styled.input``;
const SearchBtn = styled.span`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	margin-top: 5px;
	outline: 0.5px solid black;
	padding: 2x;
`;
const SearchResults = styled.div``;
const SearchResult = styled.div`
	border: 1px solid red;
`;

export default Search;
