import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
        <h1>Choose a gallery</h1>
        <Link href="/portfolio/illustrations" className="">
            <span className="">illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="">
            <span className="">illustrations</span>
        </Link>
        <Link href="/portfolio/applications" className="">
            <span className="">illustrations</span>
        </Link>
    </div>
  );
};

export default Portfolio;