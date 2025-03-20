export default function StarRating({ rating, setRating }) {
  return (
    <div>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
    </div>
  );
}
