//QUestion 1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()){
    console.log("name match")
}

//Question 2

var username = "myusername";
var lenghtOf = username.length;

if ((lenghtOf >= 4) && (lenghtOf <= 10)) { 
    console.log("Acceptable username");

} else { 
    if (lenghtOf < 4) {
        console.log("Too few characters"); }

    if (lenghtOf > 10) {
        console.log("Too many characters"); }
}

//Question 3

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
console.log("Order complete")}

else {
    if (!invoicePaid) {
        console.log("Invoice is NOT paid");}

    if (!productDispatched) {
        console.log("Product is NOT Dispached");}
        
    if (!customerHasSigned) {
        console.log("Customer has NOT signed");}
            

}

//Question 4

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid !== true) || (productDispatched !== true) || (customerHasSigned !== true)) {


    if (!invoicePaid) {
        console.log("Invoice is NOT paid");}

    if (!productDispatched) {
        console.log("Product is NOT Dispached");}
        
    if (!customerHasSigned) {
        console.log("Customer has NOT signed");}

}
else {
    
    console.log("Order complete")       

}