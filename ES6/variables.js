/**
 * `var` is the old way of naming variables. `var` has a tendency to be global
 * even if it's declared in a function.
 *
 * `let` is block level. It is only available wherever it was defined.
 *
 * `const` as in constant. this identifier can not be reassigned.
 *
 * hoisting or hoist (raise or lift). JavaScript moves all the declarations to
 * the top of the scope before code execution
 */

// var in a loop
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(`i outside for loop: ${i}`); // `i` can be accessed outside the loop

// let in a loop
for (let j = 0; j < 3; j++) {
  console.log(j);
}
// console.log(`j outside for loop: ${j}`); // ReferenceError

const PI = 3.14;
// PI = 3; // TypeError
