let fruits = ['apple', 'orange', 'guava', 'grape', 'starfruit', 'picassoMelon'];

console.log('using for loop we get:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} 

console.log("");

console.log('using while loop we get:');
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}