const Shop = {
  name: "Master Cafe",
  age: 30,
  item: "Bookshop",
  owner: "Atikur Rahaman",
};
const aboutShop = ({ name, age, item, owner } = Shop);
console.log(aboutShop.age);

const shopList =['boots','Asda','Tesco','Costa','CafeNero'];
//console.log(shopList[2]);
// Array Destructing
const [shopOne,shopTwo,shopThree]=shopList;
console.log(shopThree);
