import React from 'react';
import Header from '../header/Header';
import Img2 from '../assets/about.jpg';

export default function About() {
  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row gap-10 p-6'>
        <div className='flex justify-center md:justify-start'>
          <img src={Img2} alt="About BookHub" className='w-full max-w-xs md:max-w-md rounded-md shadow-md' />
        </div>
        <div className='flex-1'>
          <h1 className='text-3xl font-semibold mb-4'>About BookHub</h1>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque expedita dolor harum ipsam soluta, odio exercitationem, repellat hic, voluptates repudiandae. Sequi assumenda aliquam distinctio dolore commodi veritatis voluptate nostrum, repellat unde culpa ratione nulla esse nobis veniam vitae tempore cumque expedita eveniet provident voluptates iusto? Libero ut quas perspiciatis iste recusandae aut sit ex voluptates provident laboriosam, nisi sequi ratione officiis obcaecati amet qui similique in, tenetur porro. Eligendi corporis dignissimos, vitae libero atque esse omnis perferendis sequi, enim nisi soluta. Non id, quasi dolore unde deleniti provident voluptates voluptatem quibusdam tenetur, similique libero porro magni debitis laboriosam molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, quia repellat, odio officiis quas voluptatibus veritatis hic voluptatum amet incidunt numquam, a molestiae enim adipisci eligendi placeat culpa soluta nisi eum ratione. Praesentium nulla tenetur a alias saepe voluptates!
          </p>
        </div>
      </div>
    </div>
  );
}
