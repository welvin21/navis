import React, {useEffect, useState} from 'react';
import {FirebaseDB as db} from '../constants/firebase';

const ClaimList = () => {
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    db.collection('claims').get().then(querySnapshot => {
      let i = 0;
      querySnapshot.forEach((doc) => {
        setClaims(doc.data().claims);
      })
    })
  })
  return (
    <div style={{margin: '20px auto'}}>
      {
        
      }
    </div>
  )
}

export default ClaimList;