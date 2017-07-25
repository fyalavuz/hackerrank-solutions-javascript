class MyBook extends Book{
    
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    
    display() {
        console.log('Title: ' + this.title);
        console.log('Author: ' + this.author);
        console.log('Price: ' + this.price);
    }
}
// End class
