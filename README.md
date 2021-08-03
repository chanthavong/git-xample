```bash

    const users = [
      {id:1,name:'mark'},
      {id:2,name:'j'}
    ]
    const id = [1,3]
    const u = users.filter((v) => {
      return id.includes(v.id)
    })
    console.log(u)

```
