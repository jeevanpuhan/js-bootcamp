const account = {
    name: 'Jeevan Puhan',
    expenses: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpense = 0, totalIncome = 0, accountBalance = 0
        this.expenses.forEach(function(expense) {
            totalExpense += expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })

        accountBalance = totalIncome - totalExpense
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpense} in expenses.`
    }
}

// Expense => description, amount
// addExpense => description, amount
// getAccountSummary => total up all expenses => Andrew mead has $1250 in expenses.


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())