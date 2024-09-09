import Image from 'next/image';
import React from 'react';  
import {items} from "./data.js";
import {notFound} from "next/navigation";

const getData = (cat)=>{
    const data = items[cat];
    if(data){
        return data
    }
    return notFound();
}

const Category = ({ params }) => {
    const data = getData(params.category);
    return (
        <div>
            
            <h1 className='text-center mt-10 text-4xl font-semibold'>---{params.category}---</h1>
            <hr/>
            {
                data?.map(item =>(
                    <div>
                        <div>
                            <h1>Test</h1>
                            <p>Description</p>
                            <button className='btn'>button</button>
                            <Image src={item.image} width={500} height={500}  alt="" /> 
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Category;