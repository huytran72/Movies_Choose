const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starStyle = {
  display: "flex",
};

export default function StarRating({ rating, setRating }) {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p>10</p>
    </div>
  );
}
