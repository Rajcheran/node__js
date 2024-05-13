const products=[];
module.exports = class products{
    constructor(title){
        this.title=t; 
    }
    save(){
        products.push(this);
    }
    static fetchall(){
        return this.products
    }
}