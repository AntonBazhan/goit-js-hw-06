"use strict";

import users from "./users.js";

// Задание 1
const getUserNames = users =>  users.map(user => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
const getUsersWithEyeColor = (users, color) =>  users.filter(user => user.eyeColor === color);
 
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
const getUsersWithGender = (users, gender) => {
  const maleGender = users.filter(user => user.gender === gender);
  return maleGender.map(user => user.name);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
const getInactiveUsers = users =>  users.filter(user => user.isActive);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
const getUserWithEmail = (users, email) =>  users.find(user => user.email === email);
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// Задание 6
const getUsersWithAge = (users, min, max) => users.filter(user => min <= user.age && user.age <= max);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание 7

const calculateTotalBalance = users => users.reduce(
    (totalBalance, user) => totalBalance + user.balance,0);
console.log(calculateTotalBalance(users)); // 20916

// Задание 8

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9

const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10

const getSortedUniqueSkills = users => 
users
  .map(user=>user.skills)
  .reduce((allSkills, user) => [...allSkills, ...user], [])
  .filter((elem, index, array) => array.indexOf(elem) === index)
  .sort((b, a) => b.localeCompare(a, 'en'));
 
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
