let i=confirm("do you have an item to scan?");
let mytable = document.getElementById("item_list");

//prompt user and add items to the end of the table
while(i==true){
    let newrow = mytable.insertRow(-1);
    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);
    let cell4 = newrow.insertCell(3);

    let random_number = Math.random()*1000000000000;
    cell1.innerHTML = prompt("What is the name of your item?");
    cell2.innerHTML = Math.round(random_number);
    cell3.innerHTML = prompt("How much does your item cost?");
    cell4.innerHTML = "X";

    let reconfirm = confirm("Do you have more items to scan?");

    if(reconfirm==true){
        i=true;
    } else {
        i=false;
    }
}

//subtotal the whole table
let j=1;
let subtotal=0;
while(j < mytable.rows.length){
    subtotal += parseFloat(mytable.rows[j].cells[2].innerHTML);
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


