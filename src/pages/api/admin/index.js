export default async function handler(req, res) {
    if(req.method === "POST"){
        const data = req.body;
        if( data.login === process.env.NEXT_PUBLIC_DATABASE_USER && data.password === process.env.NEXT_PUBLIC_DATABASE_PASSWORD){
            res.status(200).json({status:true})
        }else{
            res.status(403).json({status:false})
        }
    }else{
        res.status(405).json({message:"Це не для цього"})
    }
    }