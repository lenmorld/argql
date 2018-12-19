#### Client-side GraphQL

ways to handle data in a React application

1. store in a Component, using `state`
   pass down to other components, using

   a. `props`
   b. `context`

2. Redux - state management, data store, actions

3. Apollo Client

   - replaces Redux for data management

   1. fetch data from server side
   2. push data to server via mutations
   3. caching (e.g. requesting same data twice)
   4. error catching, loading UI states

##### Apollo Client

vs Relay (more low-level)

Apollo boost:

- some pre-config'ed good stuff useful when dev'ing with Apollo Client

Next-with-Apollo:

- HoC exposing Apollo Client, needed since we're using Next's SSR

`withData.js`

- sort of an express middleware

###### Apollo Dev Tools

- very useful to see **cache**

![](2018-12-17-21-23-19.png)

Tip:
Locate queries in actual files
where you will be doing the query

If needed in multiple places, refactor it out

###### Apollo HoC vs render-prop

before:

```
class Items extends Component {...}
...

export default withItems(Items);

// this will expose a list of items via a prop

```

now, render-props with `Query`

\*\* Hey Query, here's a query
and here's a function (render prop)
that will do something with your `payload` result

```
class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY}>
                    {
                       (payload) => {
                            console.log(payload);
                            return <p>Hey i'm the child of query</p>
                       }
                    }
                </Query>
            </div>
        );
    }
}
```

![](2018-12-17-21-47-15.png)

3 things we're interested in the `payload`

- data
  returned from the query
- error

- loading
  flips to true when doing some sort of work
  usually false since we are using SSR

### destructuring

before:

```
{
    (payload) => {...}
}
```

after:

```
{
    ({data, error, loading}) => {...}
}
```

![](2018-12-17-22-25-52.png)

we never query `__typename = "Item"`
but generated by apollo

####### some react router stuff

\*Item.js

```
<Link href={{
    pathname: '/item',
    query: { id: item.id }      // /item?id=blah123
}}>
    <a>{item.title}</a>
</Link>
```

```
<Link href={{
    pathname: "update",
    query: { id: item.id }
}}>
    <a>Edit </a>
</Link>
```

##### createItem mutation

![](2018-12-18-22-05-30.png)

Mutation, with render prop

```
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem,
            { loading, error }) => (
          <Form
            ...
          </Form>

        )}
</Mutation>
```

we are exposing
`(createItem, { loading, error })`

error: render using `ErrorMessage` component

loading:

- stop user from typing when loading
- disable `fieldset`
- Apollo flips loading var on/off for us

![](2018-12-18-22-20-32.png)

![](2018-12-18-22-21-14.png)

Redirecting: