import "./Mobile.css";

export const Navbar = () => {
  const links = ["Services", "Projects", "About"];

  return (
    <div className="nav">
      <h2>LOGOBAKERY</h2>
      <div className="links">
        {links.map((e) => {
          return <a className="a">{e}</a>;
        })}
      </div>

      <button className="btn" onClick={() => {}}>
        Contact
      </button>
    </div>
  );
};
