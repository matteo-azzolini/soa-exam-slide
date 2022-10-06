---
layout: image-right
image: https://source.unsplash.com/collection/4625880/1920x1080
---

<Header>Api design</Header>

## Risorse

<br>

- 👤 utenti
  - 🧑🏻‍🍳 proprietari
  - 👨‍👩‍👧‍👦 clienti
- 🍽 ristoranti
- 🍜 piatti
- 📋 ordini

---

<Header>Api design / Resources</Header>

## Ristoranti

| Metodo      | Url               | Owner              | Customer  |
| ----------- | ----------------- | ------------------ | --------- |
| <Get />     | /restaurants      | <Allow />          | <Allow /> |
| <Get />     | /restaurants/:id  | <Allow />          | <Allow /> |
| <Post />    | /restaurants      | <Allow />          | <Deny />  |
| <Put />     | /restaurants/:id  | <Allow note="1" /> | <Deny />  |
| <Delete />  | /restaurants/:id  | <Allow note="1" /> | <Deny />  |

<div class="absolute bottom-6 right-6">
  <small class="font-base">1 - solo se proprietario del ristorante</small>
</div>

---

<Header>Api design / Resources</Header>

## Piatti

| Metodo      | Url                 | Owner              | Customer  |
| ----------- | ------------------- | ------------------ | --------- |
| <Get />     | /meals?restaurantId | <Allow />          | <Allow /> |
| <Get />     | /meals/:id          | <Allow />          | <Allow /> |
| <Post />    | /meals              | <Allow note="1" /> | <Deny />  |
| <Put />     | /meals/:id          | <Allow note="1" /> | <Deny />  |
| <Delete />  | /meals/:id          | <Allow note="1" /> | <Deny />  |

<div class="absolute bottom-6 right-6">
  <small class="font-base">1 - solo se proprietario del ristorante</small>
</div>

---

<Header>Api design / Resources</Header>

## Ordini

| Metodo      | Url                  | Owner              | Customer           |
| ----------- | -------------------- | ------------------ | ------------------ |
| <Get />     | /orders              | <Allow note="1" /> | <Allow note="2" /> |
| <Get />     | /orders/:id          | <Allow note="1" /> | <Allow note="2" /> |
| <Post />    | /orders              | <Deny />           | <Allow />          |

<div class="absolute bottom-6 right-6">
  <small class="font-base">1 - ordini dei propri ristoranti</small>
  <br>
  <small class="font-base">2 - ordini effettuati dal cliente</small>
</div>
