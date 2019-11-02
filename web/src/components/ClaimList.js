import React, {useEffect, useState} from 'react';
import ClaimCard from './ClaimCard';
import {FirebaseDB as db} from '../constants/firebase';

const ClaimList = () => {
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    db.collection('claims').get().then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        setClaims(doc.data().claims);
      })
    })
  })
  return (
    <div style={{margin: '20px auto'}}>
      {
        claims.map(claim => {
          return(
            <ClaimCard data={claim}/>
          );
        })
      }
    </div>
  )
}

export default ClaimList;