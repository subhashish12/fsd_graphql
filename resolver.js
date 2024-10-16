const data = { 
    authors : [
        {name : "sawan", age: "27", id:  1, bookIds: [1,2] },
        {name : "ujjwal", age: "18", id:  2, bookIds: [3] }
    ],
    books : [
        {title : "last of", publishedYear: 27, id:  1, authorId: 1},
        {title : "first of", publishedYear: 18, id:  2, authorId: 2},
        {title : "middle of", publishedYear: 18, id:  3, authorId: 1},
    ]
}


export const resolvers = {
    /** here we write all the referene definition and logic to map them */
    Book: {
        author: (parent, args, context, info)=>{
            return data.authors.find(authorDetails=> authorDetails.id == parent.authorId)
        }
    },

    Author: {
        books : (parent, args, context, info) => {
            return data.books.filter(book =>parent.bookIds.includes(book.id))
        }
    },


    /** Below we write down the all the resolver functions where all the read and update happens */
    Query: {
        authors: (parent, args, context, info)=>{
            return data.authors;
        },
        books: (parent, args, context, info)=>{
            return data.books;
        }
    },

    Mutation: {
        addBook: (parent, args, context, info)=>{
            return {};
        }
    }

}