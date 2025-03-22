const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "0",
  margin: "0",
};

export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p style={textStyle}>10</p>
    </div>
  );
}
