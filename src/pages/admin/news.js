import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { StatusContext } from "@/context/context";
import Editor from "@/components/Editor/Editor";
import moment from "moment/moment";
import Link from "next/link";

function news() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [payments, paymentsSet] = useState("");
    const [socials, socialsSet] = useState("");
    const { status, setStatus } = useContext(StatusContext);
    const addarticle = (e) =>{
        e.preventDefault();
            fetch(`/api/news`, {
                method: 'POST',
                body: JSON.stringify({
                    "name":e.target[0].value,
                    "projectName": e.target[1].value,
                    "time":moment().format('L'),
                    "description":e.target[2].value,
                    "payments":payments,
                    "socials":socials,
                    "content":data,
                    "status":true,
                    "likes":0,
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            e.target.reset()
    }
    useEffect(() => {
      setEditorLoaded(true);
      if(!status){
        router.push("/")
      }
    }, []);
    const router = useRouter()
  return (
    <section className="postList">
      <h2 className="adminTittle">Панель адміністратора</h2>
      <div className="adminNav">
        <Link className="adminNavLink" href={"/admin/news"}>Новини</Link> 
        <Link className="adminNavLink" href={"/admin/moder"}>Модерація</Link>
        </div>
        <div className="adminSectWrap">
        <div className="adminArtilesFunc">
        <form className="addArticles" onSubmit={addarticle}>
        <input className="commentFromName" type={"name"} placeholder={"Ім’я та прізвище"} required/>
        <input className="commentFromName" type={"name"} placeholder={"Назва проєкту"} required/>
        <input className="commentFromName" type={"name"} placeholder={"Короткий опис"} required/>
      <div className="App">
        <Editor
          name="articles"
          onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
        />
      </div>
        <textarea className="commentFromText" onChange={(e)=>{paymentsSet(e.target.value)}}  name="text" placeholder="Де можна підтримати фінансово (PayPal, номер карти, реквізити тощо)" maxLength="500"></textarea>
        <textarea className="commentFromText" onChange={(e)=>{socialsSet(e.target.value)}}  name="text" placeholder="Контактна інормація(номер телефону, gmail, telegram тощо)" required maxLength="500"></textarea>
      <button className="commentFromBtn">Опублікувати</button>
</form>
        </div>
        </div>
      </section>
  )
}

export default news