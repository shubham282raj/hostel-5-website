import "./landingPage.css";
import image from "./image.png";

export const LandingPage = () => {
  return (
    <div className="landingPage homePageFirstChildren">
      <div className="image">
      <img src={image} alt="hostelGateImage"/>
      </div>
      <div className="content">
        <div className="heading">Hostel 5</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          perferendis aliquam molestias sed ex dolor, cumque praesentium error
          optio. Est saepe quod veniam eius magni non modi, repellat fugit
          deleniti perferendis odit, laboriosam itaque hic dicta unde quo quae,
          vitae tempore blanditiis. Veniam unde dicta assumenda neque ea optio.
          Hic aut doloremque earum alias quas, labore fugit corporis doloribus
        </div>
      </div>
    </div>
  );
};
