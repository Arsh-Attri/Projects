/*
console.log("start");
const promise1=new Promise(function fun1(res, rej){
    rej("promise rejected");
})
console.log(promise1);
console.log("end");
*/

/*
const promise = new Promise(function fun1(res, rej){
    res("promise resolve");
})
promise.then(function success(result){
    console.log(result);
})
    */
/*
const promise = new Promise(function fun1(res, rej){
    rej("Promise rejected")
})
promise.then(function success(result){
    console.log(result);
}, function failure(err){
    console.log(err)
});
*/

/*
function isData(item){
    const promise = new Promise(function fun1(res, rej){
        if(item)
        {
            res("promise resolved")
        } else{
            rej("Data is empty")
        }
    });
    return promise;
}
let result = isData("");
result.then((result)=>{
    console.log(result);
},(result)=>{
    console.log(result);
})
    */
/*
async function fun1(){
    return "Hello1";
}
let x=fun1()
x.then((result)=>{
    console.log(result)
})

function fun2(){
    return Promise.resolve("Hello2");
}
let y=fun2();
y.then((result)=>{
    console.log(result);
})
    */


/*
function pro(){
    return new Promise(function pro1(res, rej){
        res("helllloooooo")
    })
}
async function fun1(){
    let x= await pro();
    console.log(x)
    return "Daeeettttaaaaaaaaa"
}

fun1().then((data)=>{
    console.log("data", data)
})
    */




/*
function searchFood(item){
    return new Promise(function fun1(res, rej){
        console.log("searching start for", item, "....");
        setTimeout(function timer1(){
            let data=`list of ${item}`;
            res({item, data})
        }, 3000);
    })
}

function orderFood(item){
    return new Promise(function fun2(res, rej){
        console.log("Select", item);
        setTimeout(function timer2(){
            let id=Math.floor(Math.random()*99999);
            res({id, item});
        }, 4000);
    })
}
function payment(item, id){
    return new Promise(function fun3(res, rej){
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3(){
            let status=true;
            res(status);
        }, 6000)
    })
}
async function foodOrder(item){
    try{
        let res1= await searchFood(item);
        let res2=await orderFood(res1.item);
        let res3 = await payment(res2.item, res2.id)
        console.log("Payment successfull with status", res3) 
    }catch(err){
        console.log(err)
    }
}
foodOrder("kadai Paneer");

*/
