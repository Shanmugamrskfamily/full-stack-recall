const apiCal=async()=>{
    const response=await fetch(`https://fakestoreapi.com/products`);
    const data= await response.json();
    return data;
}
apiCal().then(data=>
    data.forEach(product=>{
        if(parseInt(product.price)<10){
            console.log(product.title);
            console.log(product.price);
            console.log(`\n`)
        }
    })).catch(er=>console.error(er));
