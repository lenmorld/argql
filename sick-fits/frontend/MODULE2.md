# Module 2

## classic way of CSS

1. global styles in head
2. SASS compile, put it in there

3. inline CSS, CSS in JS
- write styles inside JS application
/ no global styles
/ specific styles not leaking out of component 

## Styled Components
- looks exactly like regular CSS

```
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  ...
`
```

#### tagged template literals
```
const MyButton = styled.button``;
---> styled.button(styles)
```

```
const MyButton = styled.button`
    background: red;
    font-size: 100px;
`;
...

<MyButton>Click Me</MyButton>



compiled:

<button class="Page__MyButton-sc-4u7a64-0 dPtXYv">Click Me</button>
```


## where to put styled components?

1. put it inside component file first
2. then refactor later to a separate file
when you need to reuse it 
`styles/` folder



## global styling

1. set stuff, e.g. typgohgraphy globally
and overwrite on the components

load global styles in
`injectGlobal`

best way to defined `border-box`


## visualizing Route changes in a SPA
(browser spinner, status bar)

- nprogress (progress bar library)

NExt.js builds pags on-demand during dev, first load slow

on prod - all loaded ad prefetched

- attach nprogress to Next Router events

onRouteChangeStart
onRouteChangeComplete
onRouteChangeError

## fixing styled components flicker on server render

on refresh, we are getting un-styled site for a split second. 
server is rendering the first run of react app, then
client side is picking it up

on client side, on mount of component
all of the components have styled components
only applied on mount

however, on SSR, all needs to be fetched
before send data to browser

we need CSS at the point of initial render

fix:
custom document, rendered on server-side
with `ServerStyleSheet`
with `getInitialProps`

https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js

collects all styles and attaches them to doc first load
puts it in the `<style>` tag