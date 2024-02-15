// create a function return promise, in this function, 
// after 3 seconds, check the age of a user input from the html page. 
// If greater than 18 show "Adult", else, show "Only adult can visit this page" on page.
let age = document.getElementById("age");
parseInt(age.value);

const promiseFunction = (a) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a > 18){
                resolve('Adult')
            }else{
                reject('Only Adult can visit this page')
            }
        }, 3000)
   
    })
}

    let click = document.getElementById("click").addEventListener("click", ()=> {
    let info = document.getElementById("info");
    promiseFunction(age.value)
   .then((res)=>{
       info.innerHTML= res;
   })
   .catch((rej)=>{
       info.innerHTML= rej;
   })
})


