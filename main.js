const str = `
010-1234-5678
seogwangwon1129@gmail.com
the rose is a rose is a rose.
abbccdddd
`

//const regexp = new RegExp('the','g')
const regexp = /rose/gi
console.log(str.replace(regexp, 'dog'))