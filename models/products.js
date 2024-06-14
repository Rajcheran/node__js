const fs = require('fs');
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const cart = require('./cart')

const getproductsfromfile = ch => {
    fs.readFile(p, (err, da) => {
        if (err) {
            return ch([])
        }
        ch(JSON.parse(da))
    });
}

module.exports = class products {
    constructor(id, t, price, discription, imageurl) {
        this.title = t;
        this.price = price;
        this.discription = discription;
        this.imageurl = imageurl;
        this.id = id;
    }
    save() {
        getproductsfromfile(products => {
            if (this.id) {
                const existingproductindex = products.findindex(prod => prod.id === this.id)
                const updatedproducts = [...products]
                updatedproducts[existingproductindex] = this
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });


    }
    static deletebyid(id){
        getproductsfromfile(products => {
            const product = products.find(prod => prod.id ===id )
            const updatedproducts = products.filter(p => p.id !== id)
            fs.writeFile(p,JSON.stringify(updatedproducts),err=>{
                if(!err){
                    cart.deleteproduct(id,product.price)
                }
            })
        });
    }
    static fetchall(ch) {
        getproductsfromfile(ch);
    }

    static findbyid(id, ch) {
        getproductsfromfile(products => {
            const product = products.find(p => p.id === id)
            ch(product)
        });

    }
}

