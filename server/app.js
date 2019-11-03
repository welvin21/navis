import Express from 'express';
import { FirebaseDB as db } from './firebase';
var app = Express();

app.get('/', (req, res) => {
    res.send("server running");
})

app.get('/files', async (req, res) => {
    const querySnapshot = await db.collection("documents").get();
    let resp = null;
    querySnapshot.forEach(doc => {
        if(doc.data().authorized){
            resp = doc.data();
        } else {
            resp = "not authorized";
        }
    });
    res.send(resp);
});

app.listen(8000, () => {console.log("listening on port " + 8000)});