var z = [{
        name: "a",
    },
    {
        name: "c",
    },
    {
        name: "c",
    },
];
var a = [{
        name: "d",
    },
    {
        name: "c",
    },
];

const b = [...z, ...a];
// let unique = [...new Set(b)];
// console.log(b.filter((x) => x.name));
let set = new Set();
let unionArray = b.filter((item) => {
    if (!set.has(item.name)) {
        set.add(item.name);
        return true;
    }
    return false;
}, set);
console.log(unionArray);