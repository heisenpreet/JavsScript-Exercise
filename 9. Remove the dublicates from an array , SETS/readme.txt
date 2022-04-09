RESOURCE: https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339



What is Currying?
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

It keeps returning a new function (that expects the current argument, like we said earlier) until all the arguments are exhausted. The arguments are kept "alive"(via closure) and all are used in execution when the final function in the currying chain is returned and executed.


USES OF CURRYING FX?

1. Write little code modules that can be reused and configured with ease, much like what we do with npm:

2. Avoid frequently calling a function with the same argument:


"Closure makes currying possible in JavaScript. It’s ability to retain the state of functions already executed, gives us the ability to create factory🏭 functions — functions that can add a specific value to their argument."