var Data=[
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011100072-1_823x.jpg?v=1656343846",
        proName:"Crystal Clear Hook Earrings(14k) ",
        price:"$14.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101016-1_823x.jpg?v=1650308676",
        proName:"Refined Stud Earrings",
        price:"$21.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-1_823x.jpg?v=1650308599",
        proName:"Terrace Drop Earrings ",
        price:"$25.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-1_823x.jpg?v=1650308558",
        proName:"Textile Drop Earrings | Houndstooth",
        price:"$25.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-C-2_823x.jpg?v=1650308512",
        proName:"Textile Drop Earrings | Checkered",
        price:"$25.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-B-1_1100x.jpg?v=1650308456",
        proName:"Textile Drop Earrings | Florals",
        price:"$25.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-A-2_823x.jpg?v=1650308396",
        proName:"Textile Drop Earrings | Specks",
        price:"$25.00"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101045-1_823x.jpg?v=1650308318",
        proName:"Jelly Hoop Earrings",
        price:"$25.00"

    }
    


]




let displayData=(Data)=>
{
Data.forEach((el)=>{
let div=document.createElement("div");
let img=document.createElement("img")
img.src=el.img
let p1=document.createElement("p")
p1.innerText= el.proName;
let p2=document.createElement("p")
p2.innerText=el.price
div.append(img,p1,p2)

document.querySelector("#box2").append(div)
})
}
displayData(Data)
console.log(Data)