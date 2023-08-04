exports.CartPage = class CartPage{
    constructor(page){
        this.page = page; 
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    
    async checkProductToCart(productName){
        const productListsInCart = await this.page.$$(this.noOfProducts);
        for(const product of productListsInCart){
            if(productName === await product.textContent()){
                console.log('Name of product    : ', productName)
                return true;
                break;
            }
        }
    }
}