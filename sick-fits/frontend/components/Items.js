import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// query data from apollo
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY}>
                    {
                        ({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error: {error.message}</p>;
                            // console.log(payload);
                            return <div>
                                <p>Hey i'm the child of query</p>
                                <p>I found {data.items.length} items</p>
                            </div>;
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default Items;