import { FirebaseDB, FirebaseStorage } from "../constants/firebase";

export function uploadFile(id, docType, base64string) {
  try {
    let storageRef = FirebaseStorage.ref("documents");
    let imageLocation = storageRef.child(id + "/" + docType);
    let arr = base64string.split(",");
    let url;
    base64string = arr[1];
    imageLocation.putString(base64string, "base64").then(function(snapshot) {
      url = snapshot.ref.getDownloadURL().then(async url => {
        const obj = new Object();
        obj[docType] = url;
        FirebaseDB.collection("documents")
          .doc(id)
          .set(obj, { merge: true })
          .catch(e => console.log(e.message));
      });
      //console.log(url);
    });
  } catch (e) {
    console.log(e.message);
  }
}
