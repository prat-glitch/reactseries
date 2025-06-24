
const books=[
    {
        title:"book one " , genre:'history', publish:'2025'
    },
    {
        titile:'book two', genre:"science", publish:'2023'
    }
]
let userbooks= books.filter((bk)=> bk.publish==='2025')
 userbooks=books.filter((bk) =>bk.publish>'2020' && bk.genre==='history')
console.log(userbooks);
const nums=[1,2,3,4]
const ans=nums.reduce(function(acc, curval)
{
    console.log(`acc:${acc} and curval:${curval}`)
    return acc+curval
}, 0)
console.log(ans);
const shopping =[
    {
        items:'mobile dev',
        price:999
    },
    {
        items:'web dev',
        price:1999
    }
]
const pricetopay=shopping.reduce((acc , item) =>acc+item.price, 0)
console.log(pricetopay);
