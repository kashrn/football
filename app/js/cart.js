// localStorage.setItem('key', string)
// localStorage.getItem('key')
//
// object = JSON.parse(string)
// string = JSON.stringify(object)
$(document).ready(function () {

    var tempCart = {};

    $(".color__btn").on('click', (function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    }));

    $(".size__btn").on("click", (function (e) {
        e.preventDefault();

        var temp_product_name = $(".tabs__controls-item.active .tabs__control-link").attr("data-name");
        tempCart["data-name"] = temp_product_name;

        var temp_product_size = $(".tabs__item.active .content__item__size input[name=\"size\"]:checked").val();
        if (temp_product_size != undefined) {
            tempCart["data-size"] = temp_product_size;
        }

        var temp_product_color = $(".color__btn.active").attr("data-color");
        if (temp_product_color != undefined) {
            tempCart["data-color"] = temp_product_color;
        }

        if (tempCart["data-size"] == undefined || tempCart["data-color"] == undefined) {
            alert("выберите цвет/размер");
        }
        else {
            var cart = tempCart;
            tempCart = {};
            console.log(cart);
            $(".tabs__item.active .content__item__size input[name=\"size\"]:checked").each(function () {
                $(this).prop('checked', false);
            });
            $(".color__btn").removeClass("active");
            //


            $(".size__btn").text("Добавлено!");
            localStorage.setItem('itemsCart', JSON.stringify(cart));
        }
    }));

});

