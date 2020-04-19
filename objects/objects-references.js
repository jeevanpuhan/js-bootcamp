let myAccount = {
    name: 'Jeevan Puhan',
    expenses: 0,
    income: 0
}

// let otherAccount = myAccount
// otherAccount.income = 1000 // income of myAccount also changes. Its a pointer that refers to income of myAccount as otherAccount = myAccount

let addExpense = function(account, amount) {
    account.expenses += amount
    
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance = account.income-account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
// addIncome, amount
// resetAccount to 0
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary


