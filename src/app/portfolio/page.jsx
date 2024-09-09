import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Choose a gallery</h1>
      <div className="flex">
        <Link href="/portfolio/illustrations"
          style={{
            backgroundImage: `url('/illustration.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="p-4 m-4 hover:text-[#53c28b] border-4 border-[#bbb] w-[300px] h-[400px] relative"
        >
          <div href="/portfolio/illustrations">
            <span className="absolute right-4 bottom-1 text-4xl font-bold">illustrations</span>
          </div>
        </Link>
        <Link href="/portfolio/websites"
          style={{
            backgroundImage: `url('/websites.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="p-4 m-4 hover:text-[#53c28b] border-4 border-[#bbb] w-[300px] h-[400px] relative">
          <div >
            <span className="absolute right-4 bottom-1 text-4xl font-bold">Websites</span>
          </div>
        </Link>
        <Link  href="/portfolio/applications"
          style={{
            backgroundImage: `url('/apps.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="p-4 m-4 hover:text-[#53c28b] border-4 border-[#bbb] w-[300px] h-[400px] relative">
          <div>
            <span className="absolute right-4 bottom-1 text-4xl font-bold">Application</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
