import { useEffect, useState } from "react";
import "./App.css";
import Loder from "./component/Loder";
import Img4 from "./assets/cover_not_found.jpg";
import Book from "./component/Book";


function App({ list }) {
  const [book1, newbook] = useState([]);
  const [cover, setcover] = useState("");
  
  console.log(book1);
  console.log(cover);
  const [b,setb]=useState(false)
  
  

  function fun(e) {
    console.log(e.key);
    newbook(e.key);
    setcover(e);
    setb(!b)
    setShowBookDetails(true)

  }

  function handleBack() {
    console.log('farman');
    setb(!b)
   // Go back to the book list view
  }

  return (
    <>
      {/* book click logic to show all data that present in Book componenet */}

      {b ? <Book book1={book1} cover={cover} goBack={handleBack} /> :<>
      <h1 className="lg:text-3xl font-bold text-center mt-6 md:text-3xl mobile:text-xl">
        Your Search Results: {list.length}
      </h1>
      {list.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => fun(item)}
              className="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl animate-fade"
            >
              <div className="p-4">
                <h1>{}</h1>
                <h3 className="text-xl font-semibold mb-2">
                  Title: <span className="text-red-600">{item.title}</span>
                </h3>
                <h4 className="text-lg font-medium mb-4">
                  Author:{" "}
                  <span className="text-blue-600">
                    {item.author_name
                      ? item.author_name.join(", ")
                      : "Unknown Author"}
                  </span>
                </h4>
                {item.ebook_access !== "no_ebook" ? (
                  <img
                    className="mb-4 rounded-md"
                    src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                    alt="Book Cover"
                    width={130}
                    height={200}
                  />
                ) : (
                  <img
                    className="mb-4 rounded-md"
                    src={Img4}
                    alt="Cover Not Found"
                    width={130}
                    height={200}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loder list={list} />
      )}
      </>}
    </>
  );
}

export default App;
