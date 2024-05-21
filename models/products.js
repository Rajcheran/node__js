const fs = require('fs');
const path = require('path')
const p= path.join(path.dirname(process.mainModule.filename),'data','products.json')

const getproductsfromfile = ch=>{
    fs.readFile(p,(err,da)=>{
        if(err){
            return ch([])
        }
        ch(JSON.parse(da))
    });
}

module.exports = class products{
    constructor(t,price,discription,imageurl){
        this.title=t; 
        this.price=price;
        this.discription=discription;
        this.imageurl=imageurl;
    }
    save(){
        getproductsfromfile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
       
        
    }
    static fetchall(ch){
      getproductsfromfile(ch);
    }
}

