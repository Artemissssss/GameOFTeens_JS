import { useContext, useEffect, useState } from "react";
import { StatusContext } from "@/context/context";
import { useRouter } from "next/router";
import Link from "next/link";
function moder(data) {
    const { status, setStatus } = useContext(StatusContext);
    const router = useRouter()
    useEffect(()=>{
        if(!status){
            router.push("/")
          }
    },[])
  return (
    <>
     <section className="postList">
        <h2 className="adminTittle">Панель адміністратора</h2>
        <div className="adminNav">
        <Link className="adminNavLink" href={"/admin/news"}>Новини</Link> 
        <Link className="adminNavLink" href={"/admin/moder"}>Модерація</Link>
        </div>
        <ul className="adminModerList">
            {
                data.data.map((arr,i)=>{return (!arr.status? <li key={i} className="adminModerItem"><Link className="adminModerItemLink" href={`/startups/${arr._id}`}>{arr.projectName}</Link> <div className="adminModerAgreeChoi"><button onClick={
                    ()=>{fetch(`/api/startups/${arr._id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        "_id": arr._id,
                        "status":true
                    }),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })}} className="adminModerAgree">Так</button> <button onClick={()=>{
                    fetch(`/api/startups/${arr._id}`, {
                        method: 'DELETE',
                        body: JSON.stringify({
                            "_id": arr._id,
                        }),
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      })
                  }} className="adminModerDisagree">Ні</button></div></li> : null)})
            }
        </ul>
     </section>
    </>
  )
}

export async function getServerSideProps() {
  const data = await (await fetch('https://game-of-teens-js-xi.vercel.app/api/startups'))?.json()
  return {
    props: {
      data
    }
  }
}

export default moder
