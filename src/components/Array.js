export default function Array() {
  const arr = [11, 5, 7, 6, 15];
  return (
    <div>
      <ul>
        {arr?.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
