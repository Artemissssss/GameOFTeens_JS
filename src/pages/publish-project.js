import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Editor from "@/components/Editor/Editor";
import moment from "moment/moment";
import ReCAPTCHA from "react-google-recaptcha";

function publishProject() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [payments, paymentsSet] = useState("");
    const [socials, socialsSet] = useState("");
    const captch = useRef()
    const addarticle = (e) =>{
        e.preventDefault();
        if(captch.current.getValue()){
            fetch(`/api/publish-project`, {
                method: 'POST',
                body: JSON.stringify({
                    "name":e.target[0].value,
                    "projectName": e.target[1].value,
                    "time":moment().format('L'),
                    "description":e.target[2].value,
                    "payments":payments,
                    "socials":socials,
                    "content":data,
                    "status":false,
                    "likes":0,
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            e.target.reset()
        }else{alert("Пройдіть перевірку ReCAPTCHA")}
    }
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    const router = useRouter()
  return (
    <section className="postList">
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
        <ReCAPTCHA
    sitekey="6LdDFZwkAAAAADmk6YJPel8e03eDXLVGuKUS_ELw"
    ref={captch}/>
      <button className="commentFromBtn">Опублікувати</button>
</form>
        </div>
        </div>
      </section>
  )
}

export default publishProject