let i=confirm("do you have an item to scan?");
let mytable = document.getElementById("item_list");

//add a function to keep the number of charachters below 12
function limit(string = '', limit = 0){
    return string.substring(0,limit)
}

//prompt user and add items to the end of the table
while(i==true){
    //create a new row
    let newrow = mytable.insertRow(-1);
    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);
    let cell4 = newrow.insertCell(3);

    //get the values from the user
    let random_number = Math.random()*1000000000000;
    let item_name = prompt("What is the name of your item?");
    let item_price = prompt("How much does your item cost?");
    let item_price_validator = parseFloat(Math.round(item_price));
        //make sure user enters the right variable type
        while(isNaN(item_price_validator)){
            item_price = prompt("Error: please enter a number value");
            item_price_validator = parseFloat(Math.round(item_price));
        }
    let item_qty = prompt("What is the QTY of this item?");
    let item_qty_validator = parseFloat(Math.round(item_qty));
        //make sure user enters the right variable type
        while(isNaN(item_qty_validator)){
            item_qty = prompt("Error: please enter a number value");
            item_qty_validator = parseFloat(Math.round(item_qty));
        }
    
    //add the values to the table
    cell1.innerHTML = limit(item_name, 12);
    cell2.innerHTML = Math.round(random_number);
    cell3.innerHTML = parseFloat(item_price).toFixed(2);
    cell4.innerHTML = Math.round(parseFloat(item_qty));

    //see if more items
    let reconfirm = confirm("Do you have more items to scan?");
    if(reconfirm==true){
        i=true;
    } else {
        i=false;
    }
}

//subtotal the whole table
let j=0;
let subtotal=0;
while(j < mytable.rows.length){
    subtotal += (mytable.rows[j].cells[2].innerHTML * mytable.rows[j].cells[3].innerHTML);
    j++;
}

let total_without_tax = document.getElementById("total_without_tax");
total_without_tax.innerHTML = subtotal.toFixed(2);

//add the tax portion
let tax_percent = 8.375;
let tax_value = document.getElementById("tax_value");
tax_value.innerHTML = (8.375*.01*subtotal).toFixed(2);


//add the total portion
let total_plus_tax = document.getElementById("total_plus_tax");
tax_value_addition = (tax_percent*subtotal*.01+subtotal).toFixed(2);
total_plus_tax.innerHTML = tax_value_addition;

//add the random ID number to the receipt
let receipt_id = document.getElementById("receipt_id");
receipt_id.innerHTML = Math.round((Math.random()*100000000));
