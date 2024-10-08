"use client"
import React, { useState, useEffect } from 'react';
import useSWR from 'swr'

const Dashboard = () => {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //             cache: "no-store"
    //         });

    //         if (!res.ok) {
    //             throw new Error("Failed to fetch data");
    //         }
    //         const data = await res.json();
    //         setData(data);
    //         setIsLoading(false);
    //     }
    //     getData(); 
    // }, [])
    // console.log("data: ", data);

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    console.log("data: ",data)
    return (
        <div>
            dashboard
        </div>
    );
};

export default Dashboard;