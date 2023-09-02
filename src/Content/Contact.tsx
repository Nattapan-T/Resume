import Social from "../component/Social";
const Contact: React.FC = () => {
  return (
    <div className="condiv">
      <h1 className="subtopic">Contact Me Via</h1>
      <h3>
        Email: <a href="mailto:fnattapans@gmail.com">fnattapans@gmail.com</a>
      </h3>
      <h3>
        Github: <a href="https://github.com/Nattapan-T">Nattapan-T</a>
      </h3>
      <h3>
        Linkedin :
        <a href="href=https://www.linkedin.com/in/%E0%B8%93%E0%B8%B1%E0%B8%90%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%93-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%87%E0%B8%A9%E0%B8%B2-3b6597288/">
          Linkedin
        </a>
      </h3>
      <h3>Phone : 0918343194</h3>
      <Social />
    </div>
  );
};
export default Contact;
