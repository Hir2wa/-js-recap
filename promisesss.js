let stocks = {
    Fruits : ["strawberry","grapes","banana","Apple"],
    Liguid : ["water","ice"],
    holder : ["cone" , "cup" , "strick"],
    toppings : ["chocolate", "peanuts"]
};
let isShop_Open = true;

let Order = (time,work) => {

return new promise( (resolve , reject) => {
    if(isShop_Open) {
        resolve(work() )
    } else {
        reject(console.log("shop is closed "));
    }

} ) 
}
order(2000 , ()=>console.log(`${stocks.Fruits[0]} was selected`) );