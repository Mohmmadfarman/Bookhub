import React, { useState } from 'react';
import Header from '../header/Header';
import { FaSearch } from 'react-icons/fa';
import App from '../App';

export default function Home() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state
  const [f,setf]=useState(true)

  const fetchBooks = async (p) => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await fetch(`https://openlibrary.org/search.json?title=${p}`);
      const data = await response.json();
      if(!data.ok){
        setf(!f)
      }
      console.log(data.docs);
      setList(data.docs);
    } catch (error) {
      
      alert('Please connect to the Internet', error);
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  function inputHandler(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function clickHandler() {
    if (input.length === 0) {
      alert('Please Enter Book Name');
      setList([]);
    } else {
      fetchBooks(input);
      setInput('');
    }
  }

  return (
    <div>
      <Header />
      <div
        id="me"
        className="flex flex-col items-center justify-center w-full max-h-max bg-[#b4b442] p-6 md:p-16"
      >
        <h1 className="text-center text-3xl md:text-5xl text-white">
          Find Your Book Of Choice
        </h1>
        <p className="text-lg md:text-2xl text-white font-semibold mt-4 md:mt-9 text-center max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit, sunt odit explicabo laudantium cupiditate aut ea animi assumenda? Magnam culpa magni optio! Animi doloribus deleniti dolore consequuntur quae tenetur!
        </p>

        <div className="flex flex-col md:flex-row md:items-center mt-6">
          <input
            onChange={inputHandler}
            value={input}
            className="text-lg md:text-2xl rounded-2xl placeholder:text-[20px] pl-4 pr-20 w-full md:w-auto sm:text-3xl pb-[10px]"
            type="text"
            placeholder="The Lost World ..."
          />
          <button
            onClick={clickHandler}
            className="mt-4 md:mt-0 md:ml-4 flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
          >
            <FaSearch className="text-2xl text-black sm:text-xl" />
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center mt-6 text-xl">Please wait a moment...</p>
      ) : list.length > 0 ? (
        <App list={list} />
      ) : (
        <p className="text-center mt-6 text-2xl">{
          f?'Please Enter book name':'No data records'
        }</p>
      )}
    </div>
  );
}
