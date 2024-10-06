import React, { useEffect, useState } from 'react';
import Img5 from '../assets/cover_not_found.jpg';
import { TiDelete } from "react-icons/ti";


export default function Book({ book1, cover,goBack }) {
    const [bookData, setBookData] = useState(null);
    

    const fetchBook = async () => {
        try {
            const response = await fetch(`https://openlibrary.org${book1}.json`);
            const data = await response.json();
            setBookData(data);

            // console.log(data);
            console.log(data);
            
            console.log(cover);
            
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    };

    useEffect(() => {
        if (book1) {
            fetchBook();
        }
    }, [book1]);

    return (
        <div className="flex flex-col items-center"> {/* Center align items for responsiveness */}
        <button className='text-5xl pt-4' onClick={goBack}><TiDelete />
        </button>
            {bookData ? (
                <div className='flex flex-col md:flex-row justify-center text-center items-center w-full p-4 mb-7 mt-9 gap-6 md:gap-12'>
                    {/* Image Section */}
                    {cover.ebook_access !== 'no_ebook' ? (
                        <img 
                            className='mb-4 rounded-md w-80 md: h-[300px] lg:h-[500px] md:w-[350px] mobile:h-[200px] mobile:w-[200px]
                             ' // Responsive image size
                            src={`https://covers.openlibrary.org/b/id/${cover.cover_i}-L.jpg`} 
                            alt="Book Cover" 
                        />
                    ) : (
                        <img 
                            className='mb-4 rounded-md w-80 h-auto' // Responsive image size
                            src={Img5} 
                            alt="Cover Not Found" 
                        />
                    )}
                    {/* Book Details Section */}
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className=' lg:text-3xl md:text-4xl font-semibold mb-5 mobile:text-xl'>Title: <span className='text-orange-700'>{bookData.title}</span></h1>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-4 mobile:text-[20px]'>Publish Date: <span>{cover.publish_date[3]}</span></h1>
                        <h1 className='text-xl md:text-2xl font-semibold mobile:text-[16px]'>Description: <span className='text-blue-500'>{bookData.description ? bookData.description.value : "No description available"}</span></h1>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
