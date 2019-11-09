import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_ENDPOINT } from "../../config/api";
import SubscriptionCard from "../ManageEvents/SubscriptionCard.js";

import * as S from "./SearchStyles"

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
				<S.Section>
					<S.SearchBarContainer>
						<i className="fas fa-search" onClick={this.fetchResults}></i>
						<S.SearchBar
							placeholder="Search for an influencer"
							name="search"
							value={this.state.search}
							onChange={this.handleChange}
						/>
					</S.SearchBarContainer>
				</S.Section>
			);

		return (
			<S.Section>
				<S.SearchBarContainer>
					<i className="fas fa-search" onClick={this.fetchResults}></i>
					<S.SearchBar
						type="submit"
						placeholder="Search for an influencer"
						name="search"
						value={this.state.search}
						onChange={this.handleChange}
						onSubmit={this.fetchResults}
					/>
				</S.SearchBarContainer>

				
				<S.SearchResults>
					{this.state.results &&
						this.state.results.map(result => {
							return (
								<div key={result.id}>
									<S.SearchResult>
										{`
								${result.first_name}
								${result.last_name}
								`}
										<button onClick={e => this.subscribe(e, result.id)}>
											Subscribe
										</button>
									</S.SearchResult>
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
				</S.SearchResults>
			</S.Section>
		);
	}
}

export default Search;
