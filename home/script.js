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
let x=document.querySelector("#below")
function MORE(){
    x.innerHTML=null
    let div=document.createElement("div")
    div.innerHTML=`<div id="box4">
    <div id="box41">
        <img class="I" src="https://storage.covet.pics/postassets/11906846/high_resolution/3c64881fc49da86f81efbb8c0db3fb36" >
    </div>
    <div id="box42">
        <img class="I" src="https://storage.covet.pics/postassets/11900085/standard_resolution/9735da6f25599555da873987b87a55fc" >
    </div>
    <div id="box43">
        <img class="I" src="https://storage.covet.pics/postassets/11891304/standard_resolution/c3d7c8b9a5a4ae46773c2de100cca0c4" >
    </div>
    <div id="box44">
        <img class="I" src="https://storage.covet.pics/postassets/11884015/standard_resolution/262382a6468d87944acabefa380c45ca" >
    </div>
    <div id="box45">
        <img class="I" src="https://storage.covet.pics/postassets/11873170/standard_resolution/92203b676649ca5b992d6e4afc3251ca" >
    </div>
    <div id="box46">
        <img class="I" src="https://storage.covet.pics/postassets/11865359/standard_resolution/5e4f7f032094ddc5e07c48ed33a6760b">
    </div>
    <div id="box47">
        <img class="I" src="https://storage.covet.pics/postassets/11825572/standard_resolution/cb6953ed513f80a167085bf1fecdde3d" >
    </div>
    <div id="box48">
        <img class="I" src="https://storage.covet.pics/postassets/11816764/standard_resolution/b71a340a9af88946ef82fd00dd189c0c" >
    </div>
    <div id="box49">
        <img class="I" src="https://storage.covet.pics/postassets/11809774/standard_resolution/4dd1cac724a2fe679fec93e5f04a83be" >
    </div>
</div>
<h4 id="MO">MORE</h4>`
document.querySelector("#below").append(div)

}