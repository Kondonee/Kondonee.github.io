function calculateTotal(quantity,price) {
    return (quantity * price)
}


function outputCartRow(item,total) {

    document.write("<tr>")
    // document.write("<td>"+ <img src="img/105070.jpg" + item.product.filename +"> </td>")
    document.write("<td> <img src=\"img/" + item.product.filename + "\"/></td>")
    document.write("<td>" + item.product.title + "</td>")
    document.write("<td>" + item.quantity + "</td>")
    document.write("<td>" + item.price.toFixed(2) + "</td>")
    document.write("<td>" + total.toFixed(2) + "</td>")
    document.write("</tr>")
 

}

const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

