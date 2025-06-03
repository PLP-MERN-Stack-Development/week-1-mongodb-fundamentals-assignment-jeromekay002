// Task 2 - Basic CRUD
// 1. Find all books in a specific genre "Crime"
db.books.find({ genre: 'Crime' })

// result from search
[
    {
        _id: ObjectId('683ede42df6ccec0dd430418'),
        title: 'My Life in Prison',
        author: 'John Kiriamiti',
        genre: ['Autobiography', 'Crime', 'Kenyan Literature'],
        published: 1994,
        pages: 310,
        price: 11.75,
        publisher: 'Jomo Kenyatta Foundation',
        inStock: true
    }
]

// 2. Find books published after a certain year eg " greater than 2004"
db.books.find({ published: { $gt: 2004 } })
// result from search 
[
    {
        _id: ObjectId('683ede42df6ccec0dd43041a'),
        title: 'Blossoms of the Savannah',
        author: 'Henry Ole Kulet',
        genre: ['Cultural Fiction', 'Drama'],
        published: 2008,
        pages: 284,
        price: 10.5,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041c'),
        title: 'When the Sun Goes Down',
        author: 'Various (Compiled by Longhorn)',
        genre: ['Short Stories', 'Set Book', 'African Literature'],
        published: 2010,
        pages: 200,
        price: 8.9,
        publisher: 'Longhorn',
        inStock: true
    }
]

// 3. Find books by a specific author eg  "Ngũgĩ wa Thiong'o"
db.books.find({ author: "Ngũgĩ wa Thiong'o" })

// result from search
[
    {
        _id: ObjectId('683ede42df6ccec0dd430416'),
        title: 'A Grain of Wheat',
        author: "Ngũgĩ wa Thiong'o",
        genre: ['Historical Fiction', 'Political'],
        published: 1967,
        pages: 240,
        price: 12.5,
        publisher: 'Heinemann',
        inStock: true
    }
]

// 4. Update the price of a specific book . 
// this updates The pearl by increasing the page number ( 96 ) + 40 = 136
db.books.updateOne({ _id: ObjectId('683ede42df6ccec0dd43041e') }, { $inc: { pages: 40 } })
// result from update
[
    {
        _id: ObjectId('683ede42df6ccec0dd43041e'),
        title: 'The Pearl',
        author: 'John Steinbeck',
        genre: ['Fiction', 'Tragedy', 'Set Book'],
        published: 1947,
        pages: 136,
        price: 7.5,
        publisher: 'Penguin',
        inStock: true
    }
]

// 5. Delete a book by its title
db.books.deleteOne({ title: 'When the Sun Goes Down' })
// { acknowledged: true, deletedCount: 1 }


// Task 3 - Advanced Queries
// 1. Write a query to find books that are both in stock and published after 2010
db.books.find({ published: { $gt: 2010 }, inStock: true })
// result from search
[
    {
        _id: ObjectId('683ede42df6ccec0dd43041f'),
        title: 'Shreds of Tenderness',
        author: 'John Ruganda',
        genre: ['Drama', 'Political', 'Post-Colonial'],
        published: 2012,
        pages: 134,
        price: 8.5,
        publisher: 'Oxford University Press',
        inStock: true
    }
]

// 2. Use projection to return only the title, author, and price fields in your queries
db.books.find({}, { title: 1, author: 1, price: 1 })

// result from search
[
    {
        _id: ObjectId('683ede42df6ccec0dd430416'),
        title: 'A Grain of Wheat',
        author: "Ngũgĩ wa Thiong'o",
        price: 12.5
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430417'),
        title: 'The River and the Source',
        author: 'Margaret A. Ogola',
        price: 13
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430418'),
        title: 'My Life in Prison',
        author: 'John Kiriamiti',
        price: 11.75
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430419'),
        title: 'Betrayal in the City',
        author: 'Francis Imbuga',
        price: 9.5
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041a'),
        title: 'Blossoms of the Savannah',
        author: 'Henry Ole Kulet',
        price: 10.5
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041b'),
        title: 'The Caucasian Chalk Circle',
        author: 'Bertolt Brecht',
        price: 9
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041d'),
        title: 'Inheritance',
        author: 'David Mulwa',
        price: 9.8
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041e'),
        title: 'The Pearl',
        author: 'John Steinbeck',
        price: 7.5
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041f'),
        title: 'Shreds of Tenderness',
        author: 'John Ruganda',
        price: 8.5
    }
]
// 3. Implement sorting to display books by price (both ascending and descending)
db.books.find().sort({ price: 1 }) // Ascending
[
    {
        _id: ObjectId('683ede42df6ccec0dd43041e'),
        title: 'The Pearl',
        author: 'John Steinbeck',
        genre: ['Fiction', 'Tragedy', 'Set Book'],
        published: 1947,
        pages: 136,
        price: 7.5,
        publisher: 'Penguin',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041f'),
        title: 'Shreds of Tenderness',
        author: 'John Ruganda',
        genre: ['Drama', 'Political', 'Post-Colonial'],
        published: 2012,
        pages: 134,
        price: 8.5,
        publisher: 'Oxford University Press',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041b'),
        title: 'The Caucasian Chalk Circle',
        author: 'Bertolt Brecht',
        genre: ['Drama', 'Classic', 'Set Book'],
        published: 1944,
        pages: 120,
        price: 9,
        publisher: 'Heinemann',
        inStock: false
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430419'),
        title: 'Betrayal in the City',
        author: 'Francis Imbuga',
        genre: ['Drama', 'Political'],
        published: 1976,
        pages: 120,
        price: 9.5,
        publisher: 'Heinemann Kenya',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041d'),
        title: 'Inheritance',
        author: 'David Mulwa',
        genre: ['Drama', 'Political'],
        published: 2004,
        pages: 110,
        price: 9.8,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041a'),
        title: 'Blossoms of the Savannah',
        author: 'Henry Ole Kulet',
        genre: ['Cultural Fiction', 'Drama'],
        published: 2008,
        pages: 284,
        price: 10.5,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430418'),
        title: 'My Life in Prison',
        author: 'John Kiriamiti',
        genre: ['Autobiography', 'Crime', 'Kenyan Literature'],
        published: 1994,
        pages: 310,
        price: 11.75,
        publisher: 'Jomo Kenyatta Foundation',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430416'),
        title: 'A Grain of Wheat',
        author: "Ngũgĩ wa Thiong'o",
        genre: ['Historical Fiction', 'Political'],
        published: 1967,
        pages: 240,
        price: 12.5,
        publisher: 'Heinemann',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430417'),
        title: 'The River and the Source',
        author: 'Margaret A. Ogola',
        genre: ['Family Saga', 'Historical Fiction'],
        published: 1994,
        pages: 370,
        price: 13,
        publisher: 'Focus Books',
        inStock: true
    }
]
db.books.find().sort({ price: -1 }) // Descending
[
    {
        _id: ObjectId('683ede42df6ccec0dd430417'),
        title: 'The River and the Source',
        author: 'Margaret A. Ogola',
        genre: ['Family Saga', 'Historical Fiction'],
        published: 1994,
        pages: 370,
        price: 13,
        publisher: 'Focus Books',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430416'),
        title: 'A Grain of Wheat',
        author: "Ngũgĩ wa Thiong'o",
        genre: ['Historical Fiction', 'Political'],
        published: 1967,
        pages: 240,
        price: 12.5,
        publisher: 'Heinemann',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430418'),
        title: 'My Life in Prison',
        author: 'John Kiriamiti',
        genre: ['Autobiography', 'Crime', 'Kenyan Literature'],
        published: 1994,
        pages: 310,
        price: 11.75,
        publisher: 'Jomo Kenyatta Foundation',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041a'),
        title: 'Blossoms of the Savannah',
        author: 'Henry Ole Kulet',
        genre: ['Cultural Fiction', 'Drama'],
        published: 2008,
        pages: 284,
        price: 10.5,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041d'),
        title: 'Inheritance',
        author: 'David Mulwa',
        genre: ['Drama', 'Political'],
        published: 2004,
        pages: 110,
        price: 9.8,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430419'),
        title: 'Betrayal in the City',
        author: 'Francis Imbuga',
        genre: ['Drama', 'Political'],
        published: 1976,
        pages: 120,
        price: 9.5,
        publisher: 'Heinemann Kenya',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041b'),
        title: 'The Caucasian Chalk Circle',
        author: 'Bertolt Brecht',
        genre: ['Drama', 'Classic', 'Set Book'],
        published: 1944,
        pages: 120,
        price: 9,
        publisher: 'Heinemann',
        inStock: false
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041f'),
        title: 'Shreds of Tenderness',
        author: 'John Ruganda',
        genre: ['Drama', 'Political', 'Post-Colonial'],
        published: 2012,
        pages: 134,
        price: 8.5,
        publisher: 'Oxford University Press',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd43041e'),
        title: 'The Pearl',
        author: 'John Steinbeck',
        genre: ['Fiction', 'Tragedy', 'Set Book'],
        published: 1947,
        pages: 136,
        price: 7.5,
        publisher: 'Penguin',
        inStock: true
    }
]

// 4. Use the `limit` and `skip` methods to implement pagination (5 books per page)
// Page 1 (skip 0, limit 5)
db.books.find().skip(0).limit(5)

// Page 2 (skip 5, limit 5)
db.books.find().skip(5).limit(5)
// result from search
[
    {
        _id: ObjectId('683ede42df6ccec0dd43041a'),
        title: 'Blossoms of the Savannah',
        author: 'Henry Ole Kulet',
        genre: ['Cultural Fiction', 'Drama'],
        published: 2008,
        pages: 284,
        price: 10.5,
        publisher: 'Longhorn',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430418'),
        title: 'My Life in Prison',
        author: 'John Kiriamiti',
        genre: ['Autobiography', 'Crime', 'Kenyan Literature'],
        published: 1994,
        pages: 310,
        price: 11.75,
        publisher: 'Jomo Kenyatta Foundation',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430416'),
        title: 'A Grain of Wheat',
        author: "Ngũgĩ wa Thiong'o",
        genre: ['Historical Fiction', 'Political'],
        published: 1967,
        pages: 240,
        price: 12.5,
        publisher: 'Heinemann',
        inStock: true
    },
    {
        _id: ObjectId('683ede42df6ccec0dd430417'),
        title: 'The River and the Source',
        author: 'Margaret A. Ogola',
        genre: ['Family Saga', 'Historical Fiction'],
        published: 1994,
        pages: 370,
        price: 13,
        publisher: 'Focus Books',
        inStock: true
    }
]

// Task 4 - Aggregation
// 1.  Create an aggregation pipeline to calculate the average price of books by genre
// use unwind to deconstruct the genre array, then group by genre and calculate the average price
db.books.aggregate([{ $unwind: "$genre" }, { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }])
// result from aggregation
[
    { _id: 'Autobiography', averagePrice: 11.75 },
    { _id: 'Fiction', averagePrice: 7.5 },
    { _id: 'Post-Colonial', averagePrice: 8.5 },
    { _id: 'Tragedy', averagePrice: 7.5 },
    { _id: 'Political', averagePrice: 10.075 },
    { _id: 'Family Saga', averagePrice: 13 },
    { _id: 'Kenyan Literature', averagePrice: 11.75 },
    { _id: 'Classic', averagePrice: 9 },
    { _id: 'Drama', averagePrice: 9.459999999999999 },
    { _id: 'Set Book', averagePrice: 8.25 },
    { _id: 'Crime', averagePrice: 11.75 },
    { _id: 'Cultural Fiction', averagePrice: 10.5 },
    { _id: 'Historical Fiction', averagePrice: 12.75 }
]

// 2 Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
    // group by author and count the number of books
    // sort in descending by count 
    // limit to only get 1 only 
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
])
// result 
[{ _id: 'Margaret A. Ogola', bookCount: 1 }]

// 3. Implement Ba pipeline that groups books by publication decade and counts them
db.books.aggregate([{ $project: { decade: { $subtract: ["$published", { $mod: ["$published", 10] }] } } }, { $group: { _id: "$decade", count: { $sum: 1 } } }, { $sort: { _id: 1 } }])
[
    { _id: 1940, count: 2 },
    { _id: 1960, count: 1 },
    { _id: 1970, count: 1 },
    { _id: 1990, count: 2 },
    { _id: 2000, count: 3 }
]

// Task 5: Indexing
// 1. Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 })

// result 
title_1

// 2 - Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published: 1 })

// result
author_1_published_1

// 3. Use the `explain()` method to demonstrate the performance improvement with your indexes
// Find all books written by John Steinbeck, and then list them in order from oldest publication to newest.
db.books.find({ author: "John Steinbeck" }).sort({ published: 1 }).explain("executionStats")
