## javascript filter
```javascript

    const users = [
      {id:1,name:'mark'},
      {id:2,name:'j'}
    ]
    const id = [1,3]
    const u = users.filter((v) => {
      return id.includes(v.id)
    })
    console.log(u)

    # result
   [{ id: 1,
    name: "mark"}]

```

## collap Object

```javascript
const users = [
  {
    id: 1,
    name: "mark",
    detail: {
      phone: "66 4433",
      address: "Vte, 12R",
    },
  },
  { id: 2, name: "j" },
];
console.log(CollapseLib.collapseDict(users));
// output {id: 2, name: "j", phone: "66 4433", address: "Vte, 12R"}
```
