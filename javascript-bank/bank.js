/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {

  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    // console.log(jeffAccount);
    return newAccount.number;
  } else {
    return null;
  }

};

Bank.prototype.getAccount = function (number) {

  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var sum = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    sum += this.accounts[i].getBalance();

  }
  return sum;
};
