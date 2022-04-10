// //NEWTOPIC
// // Write an code to get array of names from given array of users
// 2 only for active users.
// 3. in accending order of age

const users = [
  {
    id: 1,
    name: "harry",
    isActive: true,
    age: 94,
  },
  {
    id: 2,
    name: "mike",
    isActive: false,
    age: 24,
  },
  {
    id: 1,
    name: "jake",
    isActive: true,
    age: 64,
  },
];
const names = users
  .sort((a, b) => a.age - b.age)
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(names);
console.log(users);
