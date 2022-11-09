/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {

  if (Number.isInteger(balance) && balance > 0) {
    var jeffAccount = new Account(this.nextAccountNumber, holder);
    jeffAccount.deposit(balance);
    this.accounts.push(jeffAccount);
    this.nextAccountNumber++;
    return jeffAccount.number;
  } else {
    return null;
  }

};

// Bank.prototype.getAccount = function (number) {

//   for (var i = 0; i < this.accounts.length; i++) {
//     if (this.accounts[i].number === number) {
//       return this.accounts[i];
//     }
//   }
//   return null;
// };

// Bank.prototype.getTotalAssets = function () {
//   var grandBalance = 0;

//   for (var i = 0; i < this.transactions.length; i++) {
//     if (this.transactions[i].type === 'deposit') {
//       totalDeposits += this.transactions[i].amount;
//     } else {
//       totalWithdraw += this.transactions[i].amount;
//     }
//   }
//   return totalDeposits - totalWithdraw;
// };
