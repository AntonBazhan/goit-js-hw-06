"use strict";

import users from './users.js';

const getUserNames = users => {const names = users.map(user => user.name);
return names;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

