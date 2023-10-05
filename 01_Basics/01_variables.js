// Do Not use var due to scope problem for example take a variable as accountName in a program one developer gave some soe value and another developer used the sam name but inside another function then the value of that particular variable will change everywhere not only inside that particular function
//only use let and const to declare variable
//if any variable has not assigned any value it will be undefined
//console.log("") is used to print a single value but if want to print multiple values at the same time use console.table([])
const accountID="1234"
let accountEmail="prac@gamilcom"
var accountCity="Kanpur"
//accountName=Prachi
let accountDOB
console.log(accountID)
console.table([accountID,accountEmail,accountCity,accountDOB])