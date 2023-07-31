export default class DataManager  {
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid:1,
            title:"Harry Potter",
            subtitle:"Read on 3rd of March, 2000",
            image:require("../assets/Book2Cover.jpeg"),
            category:"Fiction",
        },
        {
            userid: "user1",
            bookid:2,
            title:"Game of Thrones 2",
            subtitle:"Read on 13th of May, 2014",
            image:require("../assets/Book1Cover.jpg"),
            category:"Fiction",
        },
        {
            userid: "user2",
            bookid:1,
            title:"Harry Potter",
            subtitle:"Read on 3rd of March, 2000",
            image:require("../assets/Book2Cover.jpeg"),
            category:"Fiction",
        }
    ]

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    getBooks(id){
        return this.books.filter((book)=> book.userid === id);
    }

    addBook(book){
        this.books.push(book);
    }

}