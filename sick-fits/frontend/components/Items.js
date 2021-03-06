import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config';

// query data from apollo
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
        items (first: $first, skip: $skip, orderBy: createdAt_DESC) {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

class Items extends Component {
    render() {
        return (
            <Center>
                <p>Items!</p>
                <Pagination page={this.props.page}></Pagination>
                <Query 
                    query={ALL_ITEMS_QUERY}
                    // fetchPolicy="network-only" 
                    variables={{
                        skip: this.props.page * perPage - perPage,
                    }}>
                    {
                        ({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error: {error.message}</p>;
                            // console.log(payload);
                            return <ItemsList>
                                {data.items.map(item => <Item item={item} key={item.id}/>)}
                                {/* <p>Hey i'm the child of query</p> */}
                                {/* <p>I found {data.items.length} items</p> */}
                            </ItemsList>;
                        }
                    }
                </Query>
                <Pagination page={this.props.page}></Pagination>
            </Center>
        );
    }
}

export default Items;
export { ALL_ITEMS_QUERY };