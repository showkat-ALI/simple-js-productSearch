let products =[
    {name:"smasung Phone",price:1000},
    {name:"nokia Phone",price:100},
    {name:"elite Phone",price:10000},
    {name:"smasung laptop",price:20000},
    {name:"asus laptop",price:100},
    {name:"Dell laptop",price:22000},
    {name:"i watch",price:1000},
    {name:"alo watch",price:1000},
    {name:"kuchvhi watch",price:1000},
    
];
function searchProducts(allProductCollection,product){
    let collections = [];
    for(let item of allProductCollection){
        if(item.name.indexOf(product) != -1){
            collections.push(item.name,item.price);
        }
    }
    return collections;
}
console.log(searchProducts(products,"laptop"));

