let name = prompt('What is your name?')
let age = prompt('How old are you?')
let account = prompt('What is your account number?')
let money = prompt('How much do you pay?')
let cash = 10000
if (name == 'Alex' && name == 'alex'){
    console.log('User found')
} else{
    console.log('User not found, go out.')
}
if (age >= 20 && age <= 40){
    console.log('Welcome')
} else if (age <= 20){ 
    console.log('You are too young')
} else if (age >= 41){ 
    console.log('You are too old')
} else{
    console.log('It is not even a number')
}
if (account == 7777){
    console.log('You are signed')
} else{
    console.log('This account is not registered')
}
if (money >= 100){
    console.log('You paid:', money, '', 'Your total balance:', cash - money)
} else{
    console.log('Insufficient funds on the balance sheet')
}
