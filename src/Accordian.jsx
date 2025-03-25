import { useEffect, useState } from "react";
import FAQ from "../src/FAQ.json";

export const Accordion = () => {
  const [news, setNews] = useState([]);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setNews(FAQ);
  }, []);

  const handleToggle = (id) => {
    setIsActive((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="flex justify-center" style={{ color: "white", fontSize: "50px" }}>
        ACCORDION
      </div>
      <div className="flex justify-center">
        <div style={{ width: "450px" }}>
          {news.map((curr) => (
            <div key={curr.id} style={{ border: "2px solid white", marginBottom: "10px" }}>
              <div className="flex justify-between p-3">
                <h1 style={{ color: "white" }}>{curr.question}</h1>
                <button
                  style={{ backgroundColor:isActive==curr.id?"red":"green", color: "white", padding: "5px 10px" }}
                onClick={()=>handleToggle(curr.id)}
                >
                  {isActive === curr.id ? "Hide" : "Show"}
                </button>
              </div>
              <div style={{color:"white"}}>
             {isActive==curr.id && curr.answer}</div>
                </div>
        
          ))}
        </div>
      </div>
    </>
  );
};
