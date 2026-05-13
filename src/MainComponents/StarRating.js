function StarRating({ value }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < value ? "#ffc107" : "#e4e5e9",
            fontSize: "1.2rem",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
