var {MongoClient, GridFSBucket} = require('mongodb');

const requestApi = async (req, res) => {
    const { query: { name } } = req;

    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE}/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('goiteens-files');
    const bucket = new GridFSBucket(db, { bucketName: 'files' });

    try{
        const cursor = bucket.find({filename: name});
        const result = await cursor.toArray();
        if(result.length){
            try{
                bucket.openDownloadStreamByName(name).pipe(res)
            } catch {
                res.status(404).json({
                    err: 'Not an image'
                });
            }
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    } catch (e){
        res.status(404).json({
            err: 'Not an image'
        });
    }
}
export default requestApi;