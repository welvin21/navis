import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import { FirebaseDB as db } from "../constants/firebase";

const TransactionsList = props => {
  const [claims, setClaims] = useState([]);
  const { onClickFunction } = props;
  useEffect(() => {
    db.collection("claims")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setClaims(doc.data().claims);
        });
      });
  });
  return (
    <div style={{ margin: "20px auto", overflowY : 'scroll', height : '100vh' }}>
      {claims.map(claim => {
        return (
          <TransactionCard
            key={claim.id}
            data={claim}
            onClickFunction={onClickFunction}
          />
        );
      })}
    </div>
  );
};

export default TransactionsList;
