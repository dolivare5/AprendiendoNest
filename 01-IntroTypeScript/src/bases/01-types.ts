export let name = 'Deiber Duban Olivares Olivares';
export const age = 20;
export const isValid = true;
name = 'Melissa';
// name = 123;
// name = true;

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`

console.log( templateString );

console.log(name);