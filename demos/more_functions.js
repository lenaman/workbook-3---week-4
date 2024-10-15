function displayMailingLabel(Name,Address,City,State,Zip){
    console.log(Name)
    console.log(Address)
    console.log(City)
    console.log(State)
    console.log(Zip)
}

function addNumbers(num1, num2){
    let someNumber = num1+num2;
    console.log("The sum is: " + someNumber)
}

function displayReceipt(totalDue, amountPaid){
    console.log("Total Due:" + totalDue)
    console.log("Amount Paid: " + amountPaid)

   let changeDue = amountPaid-totalDue

    if (changeDue >= 0) {
        console.log("Change Due: " + changeDue)
    }else {
        console.log("You still owe: " + Math.abs(changeDue))
    }
}

displayMailingLabel("Lena" , "309 Gold Street", "Brooklyn", "NY", "11201")
addNumbers(10,20)
displayReceipt(50,40)
