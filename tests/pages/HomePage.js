exports.HomePage = class HomePage{
    constructor(page){
        this.page = page; 
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addCartbtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';
    }

    async addProductToCart(productName){
        const productLists = await this.page.$$(this.productList);
        for(const product of productLists){
            if(productName === await product.textContent()){
                console.log('Name of product    : ', productName)
                await product.click();
                break;
            }
        }
        
        await this.page.on('dialog', async dialog =>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }

        } );
        
        await this.page.locator(this.addCartbtn).click();
    }

    async goToCart(){
        await this.page.locator(this.cart).click();
    }
}