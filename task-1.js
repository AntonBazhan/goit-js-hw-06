"use strict";

import users from './users.js';


// Задание 1
const getUserNames = users => {const names = users.map(user => user.name);
return names;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// Задание 2
const getUsersWithEyeColor = (users, color) => {const blueEye = users.filter(user => user.eyeColor === color);
  return blueEye.map(user => user.name);
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]




