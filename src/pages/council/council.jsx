import { useNavigate } from "react-router-dom";
import "./council.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { CouncilMemPost } from "../../components/councilMemPost/councilMemPost";

const Council = () => {
  const navigate = useNavigate();

  const [coordies] = useLoadContent("council/Coordinator/Coordinator", 50);
  const [secies] = useLoadContent("council/Secretary/Secretary", 50);
  const [studentCouncil] = useLoadContent(
    "council/StudentCouncil/StudentCouncil",
    50
  );
  const [office] = useLoadContent("council/Office/Office", 50);
  //components
  const HomeTab = () => {
    return (
      <div className="councilTab">
        <div className="divisionType">Office</div>
        <div className="officePosts divisionPosts">
          {office.postsList?.map((post, key) => {
            return <CouncilMemPost post={post} key={key} />;
          })}
        </div>
        <div className="divisionType">Student Council</div>
        <div className="studentCouncilPosts divisionPosts">
          {studentCouncil.postsList?.map((post, key) => {
            return <CouncilMemPost post={post} key={key} />;
          })}
        </div>
        <div className="coPosts ">
          {coordies.postsList?.map((post, key) => {
            return (
              <div key={key}>
                <div className="divisionType">{post.divisionType}</div>
                <CouncilMemPost post={post} />
                <div className="seciesPosts divisionPosts">
                  {secies.postsList?.map((secyPost, secyKey) => {
                    if (post.divisionType === secyPost.divisionType) {
                      return <CouncilMemPost post={secyPost} key={secyKey} />;
                    }
                    return <></>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const Login = () => {
    return (
      <div className="councilLogin">
        <div className="heading">Council Login</div>
        <div className="description">Login Page for council memebers only</div>
        <button onClick={() => navigate("login")}>Go to login Page</button>
      </div>
    );
  };
  //the main return
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5 | Council";
  }
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<HomeTab />, <Login/>]}
        tabLabels={["Council", "Login"]}
      />
    </div>
  );
};

export default Council;
