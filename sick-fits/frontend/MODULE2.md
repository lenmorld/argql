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

