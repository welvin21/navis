import Express from 'express';
import { FirebaseDB as db } from './firebase';
var app = Express();

app.get('/', (req, res) => {
    res.send("server running");
})

app.get('/files', (req, res) => {
    let files = {};
    db.collection("documents")
        .get()
        .then(querySnapshot => {
            console.log(querySnapshot);
            querySnapshot.forEach(doc => {
                if (doc.data().authorized) {
                    files = doc.data();
                }
                else {
                    res.send("not authorized!");
                }
            }).then(res.send(files));
        })
});

app.listen(8000, () => {console.log("listening on port " + 8000)});