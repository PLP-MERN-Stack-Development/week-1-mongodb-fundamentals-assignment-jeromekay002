const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

const books = [
  {
    title: "A Grain of Wheat",
    author: "Ngũgĩ wa Thiong'o",
    genre: ["Historical Fiction", "Political"],
    published: 1967,
    pages: 240,
    price: 12.50,
    publisher: "Heinemann",
    inStock: true
  },
  {
    title: "The River and the Source",
    author: "Margaret A. Ogola",
    genre: ["Family Saga", "Historical Fiction"],
    published: 1994,
    pages: 370,
    price: 13.00,
    publisher: "Focus Books",
    inStock: true
  },
  {
    title: "My Life in Prison",
    author: "John Kiriamiti",
    genre: ["Autobiography", "Crime", "Kenyan Literature"],
    published: 1994,
    pages: 310,
    price: 11.75,
    publisher: "Jomo Kenyatta Foundation",
    inStock: true
  },
  {
    title: "Betrayal in the City",
    author: "Francis Imbuga",
    genre: ["Drama", "Political"],
    published: 1976,
    pages: 120,
    price: 9.50,
    publisher: "Heinemann Kenya",
    inStock: true
  },
  {
    title: "Blossoms of the Savannah",
    author: "Henry Ole Kulet",
    genre: ["Cultural Fiction", "Drama"],
    published: 2008,
    pages: 284,
    price: 10.50,
    publisher: "Longhorn",
    inStock: true
  },
  {
    title: "The Caucasian Chalk Circle",
    author: "Bertolt Brecht",
    genre: ["Drama", "Classic", "Set Book"],
    published: 1944,
    pages: 120,
    price: 9.00,
    publisher: "Heinemann",
    inStock: false
  },
  {
    title: "When the Sun Goes Down",
    author: "Various (Compiled by Longhorn)",
    genre: ["Short Stories", "Set Book", "African Literature"],
    published: 2010,
    pages: 200,
    price: 8.90,
    publisher: "Longhorn",
    inStock: true
  },
  {
    title: "Inheritance",
    author: "David Mulwa",
    genre: ["Drama", "Political"],
    published: 2004,
    pages: 110,
    price: 9.80,
    publisher: "Longhorn",
    inStock: true
  },
  {
    title: "The Pearl",
    author: "John Steinbeck",
    genre: ["Fiction", "Tragedy", "Set Book"],
    published: 1947,
    pages: 96,
    price: 7.50,
    publisher: "Penguin",
    inStock: true
  },
  {
    title: "Shreds of Tenderness",
    author: "John Ruganda",
    genre: ["Drama", "Political", "Post-Colonial"],
    published: 2001,
    pages: 134,
    price: 8.50,
    publisher: "Oxford University Press",
    inStock: true
  }
];


async function insertBooks() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected to database");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books inserted successfully`);
  } catch (error) {
    console.error("Error inserting books:", error);
  } finally {
    await client.close();
  }
}

insertBooks();

// Connected to database
// 10 books inserted successfully
