import "./Card.css";

export function Card({ image, author, id }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={image}
            alt={author}
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <h1>{id}</h1>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}
