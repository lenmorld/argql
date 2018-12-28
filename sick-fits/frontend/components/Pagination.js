import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {perPage} from '../config';
import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

const PAGINATION_QUERY = gql`
	query PAGINATION_QUERY {
		itemsConnection {
			aggregate {
				count
			}
		}
	}
`;

const Pagination = props => (
	<Query query={PAGINATION_QUERY}>
		{({ data, loading, error }) => {
			if (loading) return <p>Loading...</p>;
			const count = data.itemsConnection.aggregate.count;
			const pages = Math.ceil(count / perPage);
			const page = props.page;
			return (
				<PaginationStyles>
					<Head>
						<title>
							Sick Fits! — Page {page} of {pages}
						</title>
					</Head>
					<p>
							Page {page} of {pages}
					</p>
				</PaginationStyles>
			);
 }
		}
	</Query>
);

export default Pagination;
