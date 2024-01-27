import "./ourMissionPage.css"
import image from "./image.jpg";

export const OurMissionPage = () => {
  return (
    <div className="ourMission homePageFirstChildren">
      <div className="container">
        <div className="content">
          <div className="heading">Our Mission</div>
          <div className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            magnam ea. Ducimus veniam omnis a dignissimos tenetur eligendi
            repellat esse sint. Sed reprehenderit pariatur suscipit corporis.
            Atque mollitia consectetur cumque perspiciatis, neque numquam earum
            in accusantium similique eos recusandae eligendi deserunt obcaecati.
            Consequatur
          </div>
        </div>
        <div className="image">
          <div className="decorativeBorder"></div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};