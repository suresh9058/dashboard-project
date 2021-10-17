import { useState, useEffect } from "react";
import { getCardDetails } from "../../services/CardDetails";

import { Card } from "../Card";
export function CardContainer() {
  const [cardData, setcardData] = useState([]);
  useEffect(() => {
    async function fetchCardDetails() {
      let response = await getCardDetails();
      console.log(response);
      setcardData(response?.data);
    }
    fetchCardDetails();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
      {cardData?.map((card) => (
        <Card
          key={card.id}
          image={card.download_url}
          author={card.author}
          id={card.id}
        ></Card>
      ))}
    </div>
  );
}
