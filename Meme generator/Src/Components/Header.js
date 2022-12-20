export default function Header() {
  return (
    <header>
      <img
        className="header-image"
        src={require("../images/memeface.png")}
        alt="memeface"
      />
      <h1 className="header-text">Meme Generator</h1>
    </header>
  );
}
