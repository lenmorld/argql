# Advanced-React

Frontend

### Module 1

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

### overriding Next.js' wrapper app.js

to persist state between pages
e.g. Redux, Appollo, local state

`_app.js`
