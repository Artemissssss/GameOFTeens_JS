import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile({data}) {
    const [filterP, setFilter] = useState(true)
  return (
    <>
    <Head>
    <title>Проєкти для івестицій</title>
    <meta name="description" content={data.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="all" />
    <meta name="google" content="nositelinkssearchbox" />
    </Head>
    <main>
      <section className="postList">
        <h2 className="startupsListPage">Проєкти для івестицій</h2>
        <div className="filterBtn">
            <button className="filterBtnPop" onClick={()=>{setFilter(true)}}>Популярні</button> 
            <button className="filterBtnNew" onClick={()=>{setFilter(false)}}>Нові</button>
        </div>
        <ul className="stertupsList">
            {
            filterP ? data?.sort((a,b)=>{return b.likes- a.likes }).map((arr,i)=>{
                if(arr.status){
                    return(
                        <li className="stertupsItem" key={i}>
                            <div className="stertupsItemSmallWrap">
                                <p className="stertupsItemTime">{arr.time}</p>
                                <p className="stertupsItemTime">{arr.likes}❤️</p>
                            </div>
                            <h3 className="stertupsItemTittle">{arr.projectName}</h3>
                            <p className="stertupsItemDesr">{arr.description}</p>
                            <button className="stertupsItemBtn"><Link href={`/startups/${arr._id}`} className="stertupsItemA">Подивитися більше</Link></button>
                        </li>
                    )
                }
                }
                ) : data?.reverse().map((arr,i)=>{
                    if(arr.status){
                        return(
                            <li className="stertupsItem" key={i}>
                                <div className="stertupsItemSmallWrap">
                                    <p className="stertupsItemTime">{arr.time}</p>
                                    <p className="stertupsItemTime">{arr.likes}❤️</p>
                                </div>
                                <h3 className="stertupsItemTittle">{arr.projectName}</h3>
                                <p className="stertupsItemDesr">{arr.description}</p>
                                <button className="stertupsItemBtn"><Link href={`/startups/${arr._id}`} className="stertupsItemA">Подивитися більше</Link></button>
                            </li>
                        );
                    }
                    })
        }
        </ul>
      </section>
    </main>
    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/startups')
  const data = await res.json()
  return {
    props: {
      data
    },
  };
}
