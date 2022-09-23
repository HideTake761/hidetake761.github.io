function onCalcCompoundInterestButtonClick() {
   let principalInput = document.getElementById("principalInput");
   let principal = principalInput.value;

   let reserveInput = document.getElementById("reserveInput");
   let reserve = reserveInput.value;

   let expectedreturnInput = document.getElementById("expectedreturnInput");
   let expectedreturn = expectedreturnInput.value;

   let periodInput = document.getElementById("periodInput");
   let period = periodInput.value;

   let ciamount = parseInt(principal)
   for (let i = 1; i<=period; i++) {
       ciamount = (parseInt(ciamount) + reserve*12) * (1 + expectedreturn/100);
   }

   let invamount = (parseInt(principal) + 12*reserve*period);

   let ciamountResult = document.getElementById("ciamountResult");

   ciamountResult.textContent = "After " + period + " years your amount is " + ciamount 
+ "$. (Total amount of money invested is " + invamount + "$.)";
}
