Task: Build a Secure Bank Account with Closures

Your task is to implement a function createBankAccount(initialBalance) that simulates a simple bank account system.

Requirements:

The account should start with an initialBalance.

The balance should be private (cannot be directly accessed or modified outside).

The function should return an object with the following methods:

deposit(amount) → adds money to the balance and returns the updated balance.

withdraw(amount) → subtracts money from the balance and returns the updated balance.

getBalance() → returns the current balance.


const myAccount = createBankAccount(100);

console.log(myAccount.deposit(50));   // 150
console.log(myAccount.withdraw(20));  // 130
console.log(myAccount.getBalance());  // 130

// ❌ Direct balance access should not be possible
console.log(myAccount.balance); // undefined


