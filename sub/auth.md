<Header>Progettazione Api / AUTH</Header>

## Registrazione utente

<br>

Per chiamare le API è necessario possedere un'utenza e un relativo access_token

È possibile <sky>registrare</sky> un utente tramite una chiamata all'endpoint <mono>/register</mono>

<br>

#### <Post /> /register

<div class="w-1/2">
```json
{
  "username": "xxx",
  "password": "yyy",
  "role": "OWNER"
}
```
</div>

<br>

L'utente viene salvato insieme alla sua **password** ( *hash + salt* ) e al suo **ruolo**

---

<Header>Progettazione Api / AUTH</Header>

## Login

<br>

È possibile ottenere un <sky>access_token</sky> alle API tramite una chiamata all'endpoint <mono>/login</mono>\
con **Basic authentication** (username:password)

<br>

<div class="flex space-x-6">

<div class="w-1/2">

#### <Post /> /login

```json
{
  "username": "xxx",
  "password": "yyy"
}
```
</div>

<div class="w-1/2">

#### 202 Accepted

```json
{
  "accessToken": "JWT /header/./data/./signature/"
}
```
</div>

</div>

<br>

In caso la login abbia successo viene restituito all'utente un **access_token**, in formato **JWT**, che sarà utilizzato per effettuare le successive richieste

---

<Header>Progettazione Api / AUTH</Header>

## Autenticazione

<br>

È possibile <sky>autenticarsi</sky> in ogni chiamata all'API inserendo l'access_token JWT all'interno dell'HTTP request header <mono>Authorization</mono>

<div class="w-1/2">

```
GET /restaurants
Authorization: Bearer $access_token_jwt
```

</div>

Il token ha una **validità** di un'ora e dovrà essere richiesto al termine di essa

---
layout: two-cols-header
---

<Header>Progettazione Api / AUTH</Header>

## Autorizzazione

<br>
<br>

::left::

<sky>JWT</sky> - JSON Web Token - è un token di accesso standardizzato che consente lo scambio sicuro di dati tra due parti.

Permette di gestire il **controllo degli accessi** alle risorse senza che il server debba occuparsi delle sessioni ma delegando il compito al client.

In foodev il JWT generato contiene l'**id** e il **ruolo** dell'utente, da cui si può determinare se l'utente **ha accesso** a una determinata risorsa.

::right::

##### Esempio JWT in foodev:

```json
// HEADER
{ 
  ..
}
// DATA
{ 
  "id": "123",
  "role": "OWNER"
}
// SIGNATURE
{ 
  ..
}
```
