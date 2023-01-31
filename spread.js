const favorites = ["Seafood", "salad", "nugget", "soup"];
const others = ["Cake", "Pie", "Donut"]

const allFavorites = [...favorites,...others];
console.log(allFavorites);

const obj1 = {
    firstName: 'obiwan',
    age: 28,
};

const obj2 = {
    lastname: 'luke',
    gender: "M",
};

const newObj = {...obj1,...obj2};

console.log(newObj);
