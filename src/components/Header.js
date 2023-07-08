import myvideo from '../img/video.mp4'


function Header() {
  return (
    <header>
      <video src={myvideo} loop autoPlay muted></video>
      <h1>Welcome to The Festive Solutions</h1>


      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
