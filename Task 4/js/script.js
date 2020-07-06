'use strict'

function orderDivision (allOrder) {
    let endOrder = false;
    let index = 1;
    let sortOrder = [];
    console.log(allOrder.indexOf('' + index + 1));
    
    while (!endOrder) {
        if (allOrder.indexOf('' + (index + 1)) !== -1) {
            const indexDish = allOrder.indexOf('' + (index + 1));
            const orderedDish = allOrder.slice(1,+indexDish);

            allOrder = allOrder.slice(+indexDish);
            sortOrder.push(orderedDish);
            index++;
        } else {
            const orderedDish = allOrder.slice(1);
            sortOrder.push(orderedDish);
            endOrder = true;
        }
    }

    return sortOrder;
}

const rezalt = orderDivision('1 Compot 2 Myaso 3 Kotik v teste 4 VODA 5 COFFE');
console.log(rezalt);

   