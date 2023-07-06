function duableArray(arr,callback){
    const doubleArr = arr.map((num)=>{
        return callback(num);
    });
    return doubleArr;


} 
const originally = [1,2,3,4];
function callback(num){
    return num*2;
}
const duableArray1 = duableArray( originally,callback)
console.log(duableArray1)


// q.no 2

function mainpulateString(inputString, callback){
    const mainpulatedtring = inputString.toUpperCase();
    callback(mainpulatedtring);
}
function logString(mainpulatedtring){
    console.log({mainpulatedtring});
}
mainpulateString("hello, word")

// q.no 3

const books = [
    {
        tittle: "the grate writter",
        author: "billgate",
        year: 1980,
    },
    {
        tittle: "the motivation",
        author: "herpeel lee",
        year: 1990,
    },
    {
        tittle: "who are you",
        author: "Orwell",
        year: 1956,
        },
        {
            tittle: "pride",
            author: "jen austan",
            year: 1970
        }
];

function logTittle(tittles){
    tittles.sort();
    console.log(tittles.join(" , "));
}
function extracTittle(books, callback){
    const tittles = books.map((book)=> book.tittle

    ) ;
    callback(tittles)

}
extracTittle(books, logTittle)

// q.no 4

function greet(name){
    return new Promise((resove) =>{

        const greeting = "hello , $ {name}";
        resove(greeting);
    })
}
greet("mithun").then((massage)=>{
    console.log(massage)
})

// q. no 5

async function fetchDta(){
    const respnse = await
    fetch("https: //jsonplaceholder.typecode.com/todot//");

    const data = await respnse.json();
    console.log(data)

}
fetchDta()