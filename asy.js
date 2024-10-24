/*synchronous
console.log('i');
console.log('eat');
setTimeout(()=>{console.log('ice cream');}, 3000)
console.log('with');
console.log("spoon");


function one () {
    console.log('step 1');
}
function two () {
    console.log('step 2');

}

one();
two();

*/

let stocks = {
    Fruits : ["strawberry","grapes","banana","Apple"],
    Liguid : ["water","ice"],
    holder : ["cone" , "cup" , "strick"],
    toppings : ["chocolate", "peanuts"]
};

let order = ( fruit_name, call_production) => {
setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
},2000);

}; 
let production = () => { 
setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
        console.log("Our fruits has been chopped");
        setTimeout(()=>{
            console.log(`${stocks.Liguid[0]} and ${stocks.Liguid[1]} were added `);
            setTimeout(()=>{
                console.log("our machine has started");
                setTimeout(()=>{
                console.log(` ice cream was added on ${stocks.holder[0]}`);
                setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} was  added as toppings`);
                    setTimeout(()=>{
                 console.log("serve icecream");
                    },2000)
                },3000);
                },2000);
            },1000);

        },2000);
        
        },2000);
},1000);



};
order(0,production);




