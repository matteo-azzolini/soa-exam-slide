<Header>Implementazione</Header>

## Tech stack

<br>

<!-- TODO lista -->
- koa js
  - koa routes
  - koa logger

---
layout: image-right
image: './images/koa-logo.png'
---

<Header>Implementazione / Koa</Header>

## Koa js

<!-- TODO descrizione framework -->

---

<Header>Implementazione / Koa</Header>

## App.js

<!-- TODO codice aggiornato -->

```typescript {all|1-2|4-7|8-11}
const app = new koa();
const router = new koaRouter();

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/restaurants',      getRestaurants);
router.get('/restaurants/:id',  getRestaurants);
router.post('/restaurants',     createRestaurant(request));

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};

http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(443);
```

---

<Header>Implementazione / Koa</Header>

## Esempio rotta

<!-- TODO -->

---

<Header>Implementazione / Jest</Header>

## Jest

<!-- TODO descrizione framework -->

---

<Header>Implementazione / Jest</Header>

## Esempio test di una rotta

<!-- TODO -->

---

<Header>Implementazione / Jest</Header>

## Report e TDD

<!-- TODO descrizione tdd e immagine report -->

## Esempio test


