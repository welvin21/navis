import React, { useState } from "react";
import { Input, Card } from "antd";

const ClaimTypes = () => {
  const [claimTypes, setClaimTypes] = useState([
    { key: 1, category: "Category" },
    { key: 2, category: "Type" },
    { key: 3, category: "Form" },
    { key: 4, category: "Part" },
    { key: 5, category: "Section" },
    { key: 6, category: "Fragment" },
    { key: 7, category: "Piece" },
    { key: 8, category: "Segment" },
    { key: 9, category: "Bit" }
  ]);
  const [displayTypes, setDisplayTypes] = useState(claimTypes);
  const handleChange = e => {
    if (e.target.value === "") {
      setDisplayTypes(claimTypes);
    } else {
      let list = claimTypes.filter(item => {
        return item.category
          .toUpperCase()
          .includes(e.target.value.toUpperCase());
      });
      setDisplayTypes(list);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginTop: "20px" }}>Request Data</h2>
      <Input
        placeholder="Search a claim type"
        style={{ width: "90%", margin: "30px 0px 10px 0px" }}
        onChange={handleChange}
      />
      {displayTypes.map(item => {
        item.key = Math.random();
        return (
          <Card
            style={{
              margin: "20px",
              textAlign: "left",
              padding: "0px"
            }}
            hoverable={true}
            size="small"
            key={item.key}
          >
            {item.category}
          </Card>
        );
      })}
    </div>
  );
};

export default ClaimTypes;
