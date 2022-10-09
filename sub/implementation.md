<Header>Implementazione / Koa</Header>

## Koa js

<br>

<div class="flex">
  <div class="w-4xl">
Framework javascript per nodejs progettato dal team dietro expressjs

**HTTP Middleware system** minimale: nessun middleware incluso

Supporto alle ultime versioni javascript
(es. ES6 Modules e async/await)

<br>

> Middleware utilizzati in foodev:
> - koa-router
> - koa-logger
> - koa-bodyparser
  </div>

  <div class="relative -top-10 -right-6">
    <img src="/images/koa-logo.png" />
  </div>
</div>

---

<Header>Implementazione / Koa</Header>

## Koa application

<br>

```javascript {all|1-2|4-7|8-11|12-16|18}
const app = new koa();
const router = new koaRouter();

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

router.post('/register', register);
router.post('/login', login);

router.get('/restaurants',        restaurants.getAll);
router.get('/restaurants/:id',    restaurants.get);
router.post('/restaurants',       restaurants.create);
router.put('/restaurants/:id',    restaurants.update);
router.delete('/restaurants/:id', restaurants.delete);

http.createServer(app.callback()).listen(80);
```

---

<Header>Implementazione / Koa</Header>

## Esempio rotta - <span class="text-emerald-500">POST</span> /Restaurants

<br>

```javascript {all|1|2|4-6|8-12|14-15}
function create(ctx, next) {
  authenticateToken(ctx, next);

  if (!isOwner(ctx.user)) {
    ctx.throw(403);
  }

  const ownerId = parseInt(ctx.user.id);

  const name = ctx.request.body.name;

  const restaurant = createRestaurant(ownerId, name);

  ctx.status = 201;
  ctx.body = restaurant;
}
```

---

<Header>Implementazione / Jest</Header>

## Jest

<br>

<div class="flex">
  <div class="w-4xl">
Framework javascript per scrivere test

Efficace per **TDD** - Test Driven Development - grazie alla modalità <mono>watch</mono>

<br>

> In Foodev utilizzato per verificare gli endpoint esposti:
> - /auth
> - /restaurants
> - /meals
> - /orders
  </div>
  <div class="relative -right-6">
    <img src="/images/jest-logo.jpeg" />
  </div>
</div>

---

<Header>Implementazione / Jest</Header>

## Esempio test  - <span class="text-emerald-500">POST</span> /Restaurants - *proprietario*

<br>

```javascript {all|3-7|8-15}
it('should return 201', async () => {
  const response = await request(server)
    .post('/restaurants')
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      "name": "Pizza giustissima"
    })
    .expect(201)

  expect(response.body.id).toEqual(expect.any(Number));
  expect(response.body).toStrictEqual(expect.objectContaining({
    name: 'Pizza giustissima',
    owner: 'users/882',
    meals: []
  }));
});
```

---

<Header>Implementazione / Jest</Header>

## Esempio test - <span class="text-emerald-500">POST</span> /Restaurants - *cliente*

<br>

```javascript {all|3-7|8}
it('Should return 403', async () => {
  await request(server)
    .post('/restaurants')
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      "name": "Pizza giustissima"
    })
    .expect(403)
});
```

---

<Header>Implementazione / Jest</Header>

## Jest report

<br>

```
...

PASS  tests/restaurants.spec.js
  /restaurants OWNER
    ✓ GET ALL     - should return 200 (3 ms)
    ✓ GET/123     - should return 200 (2 ms)
    ✓ POST        - should return 201 (3 ms)
    ✓ PUT/123     - should return 200 (2 ms)
    ✓ DELETE/XXX  - should return 200 (3 ms)
  /restaurants CUSTOMER
    ✓ GET ALL     - should return 200 (1 ms)
    ✓ GET/123     - should return 200 (2 ms)
    ✓ POST        - should return 403 (2 ms)
    ✓ PUT/123     - should return 403 (1 ms)
    ✓ DELETE/123  - should return 403 (1 ms)

...
```

