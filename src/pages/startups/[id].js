import { StatusContext } from "@/context/context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
const parse = require('html-react-parser');

function  Id({data}) {
  const router = useRouter()
    const { status, setStatus } = useContext(StatusContext);
    const [favoriteNumber, setFavoriteNumber] = useState(true)
    
    useState(()=>{
      if (typeof window !== 'undefined') {     
        const item = localStorage.getItem(`likes${data._id}`)
        setFavoriteNumber(item)
      }
      if(!status && !data.status){
        router.push("/")
      }
      },[])
  const saveToLocalStorage = e => {
    e.preventDefault()
    localStorage.setItem(`likes${data._id}`, favoriteNumber)
  }
  return (
    <>
<Head>
    <title>{data.projectName}</title>
    <meta name="description" content={data.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="all" />
    <meta name="google" content="nositelinkssearchbox" />
    </Head>
    <main>
      <section className="postList">
        <h2 className="startupsCurName">{data.projectName}</h2>
        <p className="startupsCurNameDate">{`${data.name} ${data.time}`}</p>
        {parse(`${data.content}`)}
        <h4 className="supportMoney"><span className="moneyBold">Підтримати автора за:</span><br/>{data.payments}</h4>
        <h4 className="contactAuthor"><span className="moneyBold">Зв’язатися з автором за:</span><br/>{data.socials}</h4>
        <button onClick={()=>{
          if(!favoriteNumber){
            fetch(`/api/startups/${data._id}`, {
              method: 'POST',
              body: JSON.stringify({
                  "_id": data._id,
                  "status":data.status,
                  "likes":data.likes+1
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            setFavoriteNumber(true)
          }
        }} className="startupsCurLikes">{data.likes}❤️</button>
      </section>
    </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://game-of-teens-js-xi.vercel.app/api/startups/${context.params.id}`)
  const data = await res.json()
  return {
    props: {id:context.params.id,data},
  }
}
export default Id
