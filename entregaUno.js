class ProductManager {
    constructor() {
    this.products = [];

    }


    /* Method AddProduct */

    addProduct = (Title, Description, Price, Thumbnail, Code, Stock) => {

        const productIndex = this.products.findIndex( (product) => product.Code === Code)

        if (!Title || !Description || !Price || !Thumbnail || !Code || !Stock) {
            console.log ("Error: All fields are mandatory")
            return; 
        };  
            
        if(productIndex === -1) {
            const product = {
                prodId: this.products.length + 1,
                    Title,
                    Description,
                    Price,
                    Thumbnail,
                    Code,
                    Stock,
            };
            this.products.push(product);
                console.log( `Product with code ${Code} addedsuccessfully` )
        } else {
            console.log(`Error: Product with code ${Code} already exists`);
        }
    };
        
            /* Method getProducts */

            getProducts = () => {
            console.log (this.products);
            return this.products;
            };


            /* Method get ProductById */
    getProductById = (productId) => {
        const productIdFound = this.products.findIndex((prod) => prod.prodId === productId);
        if (productIdFound === -1) {
            console.log(`Error: Product with ID ${productId} was not found` );
        } else {
            console.log( `Info on product with Product ID ${productId}:`);
            console.log(this.products[productIdFound])
        }
    };

}

                                    /* Testing mode */

let products = new ProductManager();

products.getProducts();

products.addProduct( "test product", "this is a test product", 200, "no image", "abc123", 25) //Product with code abc123 addedsuccessfully

products.getProducts();  

products.addProduct( "test product", "this is a test product", 200, "no image", "abc123", 25) //Error: Product with code abc123 already exists

products.addProduct( "test product", "this is a test product", 200, "no image", "abc124", 70)
products.addProduct( "test product", "this is a test product", 200, "no image", "abc125", 80)


products.getProductById(5) //Error: Product with ID 5 was not found
products.getProductById(2) // Info on product with Product ID 2:...
products.getProductById(7) //Error: Product with ID 7 was not found
products.getProductById(3) // Info on product with Product ID 3:...


