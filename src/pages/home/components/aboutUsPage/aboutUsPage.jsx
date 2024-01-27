import "./aboutUsPage.css";
import image from "./image.jpg";

export const AboutUSPage = () => {
  return (
    <div className="aboutUs homePageFirstChildren">
      <div className="container">
        <div className="image">
          <div className="decorativeBorder"></div>
          <img src={image} alt="" />
        </div>
        <div className="content">
          <div className="heading">About Us</div>
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            magnam ea. Ducimus veniam omnis a dignissimos tenetur eligendi
            repellat esse sint. Sed reprehenderit pariatur suscipit corporis.
            Atque mollitia consectetur cumque perspiciatis, neque numquam earum
            in accusantium similique eos recusandae eligendi deserunt obcaecati.
            Consequatur
          </div>
        </div>
      </div>
    </div>
  );
};
