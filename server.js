let shopping_cart = [];
let sum = 0;

const rebeka_ = {id: shopping_cart.length + 1, name: "Rebeka", price: 185000};
const man_pish_az_to_ = {id: shopping_cart.length + 1, name: "Man Pish Az To", price: 165000};
const kimiagar_ = {id: shopping_cart.length + 1, name: "Kimiagar", price: 150000};


function alert() {
    Swal.fire ({
        icon: "success",
        title: "تبریک",
        html: "<b>کالا با موفقیت به سبد خرید افزوده شد</b>" + "<br>",
        confirmButtonColor: "#009a00"
    });
}
function empty() {
    Swal.fire({
        icon: "info",
        title: ": سبد خرید شما",
        html: "<b>" + "! هیچ محصولی در سبد خرید موجود نیست" + "</b>" + "<br>" + "<b>مجموع سبد خرید :  </b>" + "<b>" + sum + "</b>" + "<b>  تومان</b>",
        confirmButtonColor: "#009a00"
    });
}
function shop() {
    Swal.fire ({
        icon: "info",
        title: ": سبد خرید شما",
        html: "<b>" + JSON.stringify(shopping_cart) + "</b>" + "<br>" + "<b>مجموع سبد خرید :  </b>" + "<b>" + sum + "</b>" + "<b>  تومان</b>",
        confirmButtonColor: "#009a00"
    });
}
function rebeka() {
    shopping_cart.push(rebeka_);
    sum += rebeka_.price;
    console.log(shopping_cart);
    console.log(sum);
    setTimeout(shop, 5000);
}
function man_pish_az_to() {
    shopping_cart.push(man_pish_az_to_);
    sum += man_pish_az_to_.price;
    console.log(shopping_cart);
    console.log(sum);
    setTimeout(shop, 5000);
}
function kimiagar() {
    shopping_cart.push(kimiagar_);
    sum += kimiagar_.price;
    console.log(shopping_cart);
    console.log(sum);
    setTimeout(shop, 5000);
}

$("#rebeka").click(rebeka);
$("#man-pish-az-to").click(man_pish_az_to);
$("#kimiagar").click(kimiagar);
$(".shopbut").click(alert);
$("#shopcart").click(shop);