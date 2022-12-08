let books = [
    {
        title: "Speaking Javascript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming Javascript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
        }
    ];
    
books.push({
        title: "Learning Javascript Design Patterns",
        author: "Addy Osmani",
        pages: 254
    })
    
// console.log(books.length, books[0].title, books[1].title, books[2].title, books[3].title);

let new_array = books.slice(-2,)
console.log(`${new_array.length} items: ${new_array[0].title}, ${new_array[1].title}`)