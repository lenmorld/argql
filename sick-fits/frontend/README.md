# Advanced-React

Frontend

### Module 1

##### routing components in Next.js

Next.js - provides routing
    - just put a <page>.js in pages/

causes a refresh 😟
```
<a href="/sell">Sell</a>
```

bound to pushState
no refresh 😊

```
    <Link href="/sell">
        <a>Sell!</a>
    </Link>
```

---

##### overriding Next.js' wrapper app.js

to persist state between pages
e.g. Redux, Appollo, local state

`_app.js`


### Module 2