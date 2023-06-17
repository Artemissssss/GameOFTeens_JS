const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    try {
        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE}/?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
            );
            const coll = client.db('goiteens').collection('startups');
            const filter = {_id: new ObjectId(req.query.id)};
            if(req.method === "POST"){
                //!=================================
                const data = req.body;
                const status = data.status ? {"status": data.status} : {}
                const likes = data.likes ? {"likes": data.likes} : {}
                coll.updateOne(
                    {_id: new ObjectId(data._id)},
                    {
                        $set: {...status, ...likes},
                        $currentDate: { lastModified: true }
                    }
                    )
                    const cursor = coll.find({_id: new ObjectId(data._id)});
                    const result = await cursor.toArray();
                    
                    await client.close();
                    if(result && result[0]){
                        res.status(200).json(result[0])
                    } 
                }else if(req.method === "DELETE"){
                    const result = await coll.deleteOne({_id: new ObjectId(req.body._id)});
                    const filter = {_id: new ObjectId(req.query.id)};
                    const cursor = coll.find(filter);
                    const result2 = await cursor.toArray();
                    await client.close();
                    res.status(200).json(result2)
                }else{
                    console.log(req.body)
                    const cursor = coll.find(filter);
                    const result = await cursor.toArray();
                    await client.close();
                    res.status(200).json(result[0])
                }
            } catch(e) {
                res.status(404).json({message: "Not found"})
            }
        }