import "./Mobile.css";
export const Mobile = () => {
  const a1 = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const a2 = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {a1.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul className="ul">
        {a2.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};
