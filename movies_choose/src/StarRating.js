export default function StarRating({ rating, setRating }) {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };


    return (
    <div style={}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p>10</p>
    </div>
  );
}
