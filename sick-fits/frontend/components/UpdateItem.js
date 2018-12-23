import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			price
		}
	}
`;

// mutation query
// createItem from `schema.graphql`
const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		) {
			id
		}
	}
`;

class UpdateItem extends Component {
	state = {};

	// instance properties
	handleChange = e => {
		const { name, type, value } = e.target;
		console.log({ name, type, value });

		const val = type === "number" ? parseFloat(value) : value;

		this.setState({
			[name]: val
		});
	};

	render() {
		return (
			<Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
				{({ data, loading }) => {
					if (loading) return <p>Loading...</p>;

					// console.log(data);

					return (
						<Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
							{(createItem, { loading, error }) => (
								<Form
									onSubmit={async e => {
										e.preventDefault(); // stop form from submitting
										// console.log(this.state);

										// TODO: check first if image is finished uploading
										//      better UX instead of error on submit when image doesn't exist

										// call mutation
										const res = await createItem();

										console.log(res);

										// redirect to single item page
										Router.push({
											pathname: "/item",
											query: { id: res.data.createItem.id }
										});
									}}
								>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<label htmlFor="title">
											Title
											<input
												type="text"
												id="title"
												name="title"
												placeholder="Title"
												required
												defaultValue={data.item.title}
												onChange={this.handleChange}
											/>
										</label>
										<label htmlFor="price">
											Price
											<input
												type="number"
												id="price"
												name="price"
												placeholder="Price"
												required
												defaultValue={data.item.price}
												onChange={this.handleChange}
											/>
										</label>
										<label htmlFor="description">
											Description
											<textarea
												id="description"
												name="description"
												placeholder="Enter a description"
												required
												defaultValue={data.item.description}
												onChange={this.handleChange}
											/>
										</label>
										<button type="submit">Submit</button>
									</fieldset>
								</Form>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
