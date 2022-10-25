---
layout: center
---

# Requisiti

---

<Header>Requisiti</Header>

## Foodev

<br>

Foodev è una <sky>REST API</sky> che permette di gestire un servizio di consegna di cibo

<br>

***

<br>

Deve gestire **due tipologie** di utenti:
- i proprietari - <sky>owner</sky> - possono inserire e modificare il proprio ristorante e il menù
- i clienti - <sky>customer</sky> - possono effettuare ordini in un particolare ristorante selezionando i piatti desiderati

---

<Header>Requisiti</Header>

## Accesso alle risorse

<br>

È necessario possedere un'utenza valida e **autenticarsi** per poter richiamare le API.

Un utente può modificare solo le **proprie** risorse

> Esempio\
> Un proprietario può modificare solo un ristorante in suo possesso\
> Un cliente non può modificare ristoranti
