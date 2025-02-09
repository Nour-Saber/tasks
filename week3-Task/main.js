
async function getData() {
        try {
                const res = await fetch("data.JSON")
                const data = await res.json();
                data.products.forEach(product => {
                   console.log(product.name);
                });
                let filteredData=data.products.filter(product=>product.inStock==true);
                //console.log(filteredData);
                let totalPrice=0;
                data.products.forEach(product => {
                        totalPrice+=product.price;
                     });
                //console.log(totalPrice);
                let theMostExpensiveOne=0;
                data.products.forEach(product => {
                        
                        theMostExpensiveOne=Math.max(theMostExpensiveOne,product.price);
                     });
             
               
                  //console.log(theMostExpensiveOne);   
        
                
        } catch (error) {
                console.log(error.message)
                console.log(error)
        }

}
getData();
