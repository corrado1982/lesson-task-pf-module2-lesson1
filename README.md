# Programming Foundations - Module 2

## Lesson Task 1 Questions

### Question 1

Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

```js
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()){
    console.log("name match")
}

### Question 2

//Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.


var username = "myusername";
var lenghtOf = username.lenght;

if ((lenghtOf >= 4) && (lenghtOf <= 10)) { 
    console.log("Acceptable username");

} else { 
    if (lenghtOf < 4) {
        console.log("Too few characters"); }

    if (lenghtOf > 10) {
        console.log("Too many characters")}
}
```

If both tests pass log a message saying "Acceptable username".

If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".

Change the variable's value to test your code.

### Question 3

The following criteria need to be met before an order can be considered complete:

-   The invoice must be paid
-   The product must have been dispatched
-   The customer must have signed for the delivery

Using the variables below write an if/else statement that determines whether the order is complete:

```js
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
```

If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.

Use the logical AND (&&) operator to complete this task.

Change the variables' values to test your code.

### Question 4


Re-write your code from the question above using the logical OR (||) operator.

```js
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
