'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useState} from "react";
import Link from "next/link";

export default function Home() {

    const [text, setText] = useState("");
    const [data, setData] = useState([]);

  const postName = () => {
    fetch('http://localhost:8080/names', {
      method: "POST",
      body: JSON.stringify({
          name: text
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
    });

  }


  const getNames = () => {
    fetch('http://localhost:8080/names', {
      method: "GET"
    })
    .then((data) => data.json())
    .then((responseJSON) => {
        console.log("DATA FETCHED")
        setData(responseJSON.data)
    })
    .catch((e) => console.log(e))
    .finally(() => console.log("종료"))

      console.log("HELLO");
  }

  return (
    <main style={{display: "flex", flexDirection: 'column', padding: 20}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{backgroundColor: "white", color: "black"}}/>
            <button style={{width: 50, height:30, backgroundColor: 'white', color: 'black'}} onClick={postName}>보내기</button>
        </div>
        <button style={{width: 100, height:30, backgroundColor: 'white', color: 'black'}} onClick={getNames}>데이터 가져오기</button>
        {
            data?.map(item =>
                <Link href={`/${item.id}`}>
                    <div style={{padding: 10}}>
                        {item.id} : {item.name}
                    </div>
                </Link>)
        }
    </main>
  )
}
