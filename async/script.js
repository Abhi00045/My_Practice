let order = document.getElementById("order");

function selectPizza(callback){
    setTimeout(()=>{
        let pizza = "chicken";
    console.log(`step1:${pizza}`);
    callback(pizza);
    },1000)
}
function orderPizza(pizza,callback){
setTimeout(()=>{
    let pizzaOrder = "orderPlaced";
    console.log(`step 2:${pizzaOrder}`);
    callback(pizzaOrder,pizza);
},2000)

}

function orderPlaced(pizzaOrder,pizza){
setTimeout(()=>{
    console.log(`step3:${pizzaOrder}`);
    console.log(`enjoy mam ${pizza}`);
},2300)
}

order.addEventListener("click",()=>{
    console.log(`processing`);
    selectPizza((pizza)=>{
        orderPizza(pizza,(pizzaOrder,pizza)=>{
            orderPlaced(pizzaOrder,pizza);
        })
    })
})

//promise

let orderPizza =()=>{
    return new Promise((res,rej)=>{
    orderPlaced=true;
    if(orderPlaced){
        res(`log`);
    }else{
        rej(`error`);
    }
    });
};