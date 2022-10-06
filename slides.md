---
# try also 'default' to start simple
theme: default
title: Foodev
titleTemplate: '%s - SOA'
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# https://unsplash.com/collections/3JDsDM8qmaI/slidev
# https://unsplash.com/collections/7pU-FOuzi98/%E5%B9%BB
#
# background: https://source.unsplash.com/collection/3JDsDM8qmaI/1920x1080
background: https://source.unsplash.com/collection/4625880/1920x1080

highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
#
layout: cover
# image: 'https://source.unsplash.com/collection/94734566/1920x1080'
# apply any windi css classes to the current slide
class: text-center
---

<div class="bg-black w-full right-0 absolute bg-opacity-40 shadow-lg">
<!-- <h1>Foo<span class="text-sky-500">dev</span></h1> -->

# Foo<span class="text-sky-500">dev</span>

Architetture Orientate ai Servizi - 2022

Matteo Azzolini
</div>

<!-- <style>
.cover {
  @apply bg-opacity-100;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 50%;
}
</style> -->

---
src: ./sub/intro.md
---

---
src: ./sub/requirements.md
---

---
layout: center
---

# Progettazione API

---
src: ./sub/resources.md
---

---
src: ./sub/auth.md
---

---
src: ./sub/request-example.md
---

---
layout: center
---

# Implementazione

---

# Tech stack

- koa js
  - koa routes
  - koa logger

---

# App.js

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
layout: center
class: text-center
---

# Demo

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
