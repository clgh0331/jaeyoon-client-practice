// 'use client'
// import {useEffect, useState} from "react";

export default async function Home({params, searchParams }) {
    const {nameId} = params;

    // const [data, setData] = useState();
    //
    // useEffect(() => {
    //     getName();
    // }, []);

    // const getName = () => {
    //     fetch(`http://localhost:8080/names/${nameId}`, {
    //         method: "GET"
    //     })
    //         .then((data) => data.json())
    //         .then((responseJSON) => {
    //             console.log("DATA FETCHED")
    //             console.log(responseJSON.data)
    //             setData(responseJSON.data)
    //         })
    // }

    const data = await fetch(`http://localhost:8080/names/${nameId}`, {
        method: "GET"
    })
        .then((data) => data.json())
        .then((responseJSON) => {
            // console.log("DATA FETCHED")
            console.log(responseJSON.data)
            // setData(responseJSON.data)
            return responseJSON.data;
        })

    return(
        <>
            <div>HELLO {nameId}</div>
            <div>{data.id} {data.name}</div>
        </>
    )
}
