"use client";
import React, { useEffect, useState } from "react"
// import { set } from "cypress/types/lodash";

export default function VisitorCounter() {
    // const COUNT_API = `https://6gl89wftdk.execute-api.us-east-1.amazonaws.com/Prod/counter`;

    const [count, setCount] = useState();    


    useEffect(() => {
        async function getCount() {
            const response = await fetch('https://cbq78s9fa0.execute-api.us-east-1.amazonaws.com/Prod/counter');
            const data = await response.json();
            console.log(data)
            setCount(data);
        }
        getCount();
    }, []);

    return (
        <div className="border-2 border-black px-4">
            <p>Views: {count}</p>
        </div>
    )
}