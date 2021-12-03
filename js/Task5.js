let count = 0;
let n = 1;
while (n != 0) {
let cart = prompt("Введіть карту(2,3,4,5,6,7,8,9,10,J,Q,K,A): ");

    if (cart === '2' || cart === '3' || cart === '4' || cart === '5' || cart === '6') {
        count += 1;
    } else
        if (cart === '7' || cart === '8' || cart === '9') {
            count = count + 0;
        } else
            if (cart === '10' || cart === "J" || cart === "Q" || cart === "K" || cart === "A") {
                count -= 1;
            } else {
                alert("Ошибка");
            }
    n = (prompt("Якщо хочете завершити гру введіть 0"));
     if (count > 0) {
        alert(`count = ${count}, Bet`);
    } else
        alert(`count = ${count}, Hold"`);
}
