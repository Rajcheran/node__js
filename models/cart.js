const fs = require('fs')
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')

module.exports = class car {
    static addproduct(id, productprice) {
        // fetch cart
        fs.readFile(p, (err, filecontent) => {
            let cart = { products: [], totalprice: 0 }
            if (!err) {
                cart = JSON.parse(filecontent)
            }
            const existingproductindex = cart.products.findIndex(prod => prod.id === id)
            const existingproduct = cart.products[existingproductindex]
            let updatedproduct
            console.log(existingproduct)
            if (existingproduct) {
                updatedproduct = { ...existingproduct };
                updatedproduct.qty = updatedproduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingproductindex] = updatedproduct
            }
            else {
                updatedproduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedproduct]
            }
            cart.totalprice = cart.totalprice + +productprice
            console.log(cart.totalprice)
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
            })
        })
    }
    static deleteproduct(id, price) {
        fs.readFile(p, (err, car) => {
            if (err) {
                return
            }
            const updatedcart = { ...JSON.parse(car) };
            const product = updatedcart.products.find(prod => prod.id === id)
            if(!product){
                return;
            }
            const productqty = product.qty
            updatedcart.products = updatedcart.products.filter(prod => prod.id !== id)
            updatedcart.totalprice = updatedcart.totalprice - price * productqty
            fs.writeFile(p, JSON.stringify(updatedcart), (err) => {
                console.log(err)
            })
        })
    }
    static getcart(cb){
        fs.readFile(p,(err,filecontent)=>{
            const cart = JSON.parse(filecontent);
            if(err){
                cb(null)
            }else{
            cb(cart);
            }
            
        })
    }

}