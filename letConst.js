var > we are able to redeclare and reassign.
let > we cannot redeclare but we can reassign
const > we cannot redeclare nor reassign.

Welcome to Node.js v16.13.2.
Type ".help" for more information.
> var a = 10;
undefined
> a
10
> var b = 12;
undefined
> b
12
> a
10
> let a=23;
Uncaught SyntaxError: Identifier 'a' has already been declared
> var a = 23;
undefined
> a
23
> let c = 23;
undefined
> c
23
> let c = 24;
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =45;
45
>
> const d =34;
undefined
>
> const d= 23;
Uncaught SyntaxError: Identifier 'd' has already been declared
> d=45;
Uncaught TypeError: Assignment to constant variable.
