/*
Cash register
-Should always return an object with a status key and a change key
-return {status: "INSUFFICIENT FUNDS", change: []} if cid < change due, or if you cannot return exact change.
-return {status: "CLOSED", change: [...]} with cid as value for key change if it is equal to change due
-otherwise, return {status: "OPEN", change: [...]} with change due in coins and bills, sorted high to low, as value of change key.
[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
*/



  function checkCashRegister(price, cash, cid) {
      var change = price - cash //change due to customer
      var totalInDrawer = 0;
      var values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
      var changeArray = [];
      //calculate current amount of cash in box? from 100 to penny, then from 20 to penny. then if this amount is greater than change, we know we can start the change loop.
      //if amount from 100-penny is equal to change due, then do the closed ending.
      for (var totalIndex = 0; totalIndex<cid.length;totalIndex++) {
          totalInDrawer = totalInDrawer + cid[totalIndex][1]
      }
      if (totalInDrawer == change) {
          return {status: "CLOSED", cid} //will need to be sorted high to low
      }
      else if (totalInDrawer < change) {
          return {status: "INSUFFICIENT FUNDS", change: []}
      }
      else {
          //status is open for now, move on to see if we can give exact change
      }

      //convert change to numbers of coins/bills and then back? could be easier
      for (var index = 0; index<cid.length; index++) {
          cid[index][1] = cid[index][1]/values[index][1] 
          console.log(cid);
      }



      while (change >= 0) {
          var moneyValue = 8;
          if (change - values[moneyValue][1] < 0) {
              moneyValue - 1;
          }
          else if (change - values[moneyValue][1] == 0) { //if change (say .25) minus values[4][1] == 0
              if (cid[moneyValue][1] > 0) {
                  change = change - values[moneyValue][1]
                  changeArray.push(values[moneyValue])
              }
              else {
                  moneyValue - 1
              }
          }
          else if (change - values[moneyValue][1] > 0) {

          }
      }

      for (var moneyValue; moneyValue<cid.length; moneyValue++) {
          //iterate backwards over the value array to see what largest denomination we can put towards change ? modulo?
          if (change - values[moneyValue] < 0)
          //if subtracting value doesn't make it negative, how many of that denomination can we hypothetically put towards the change?
          //then if it doesn't make it negative, we can ask cid if we have that denomination.
          //if we do, can we do this for the same number of times we hypothetically did?
          //if we do, then subtract the amount from the cid
          //if we don't, then look to the next lowest denomination. do we have enough to add up to one of the larger denomination?
          //if we do, then add that to our change array and continue until change equals zero.
          //if we don't then we can't give change and get the insufficient funds ending.
          //if we get everything to work then we get the normal ending.
      }
      return change;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);