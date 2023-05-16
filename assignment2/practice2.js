// 2-1 Object person
const person = {
    name: 'Jackson',
    age: 28,
    year: 1994,
    birthday: '08/15',
    job: 'engineer',
};
console.log(person);

// 2-2
const person1 = {
    name: 'Jackson',
    age: 28,
    year: 1994,
    birthday: '08/15',
    job: 'engineer',
    greet: {
        greeting: 'Hello',
    },
    friends: [], //2-3使用
};
console.log(person1.greet);

// 2-3，承接2-2
function addFriends(person1, friendName) {
    person1.friends.push(friendName);
}

addFriends(person1, 'Mike');
addFriends(person1, 'Bella');
addFriends(person1, 'Nancy');
console.log(person1.friends.slice(0, 3));
console.log(person1);
