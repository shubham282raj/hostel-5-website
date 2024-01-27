import "./mess.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { MessMenuPost } from "../../components/messMenuPost/messMenuPost";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingTriangle } from "../../components/loadingTriangle/loadingTriangle";

const Mess = () => {
  const  [home] = useLoadContent("mess/feed/feed", 10)
  const  [mess] = useLoadContent("mess/menu/menu", 1)
  //components
  const HomeTab = () => {
    return (
      <div className="cultHomeTab homeTabContainer">
        {home.postsList?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
        {home.loading && <LoadingTriangle/>}
        {home.hasMore && <button className="tabLoadMoreBtn" onClick={home.loadMore}>Load More</button>}
      </div>
    );
  };
  const MessMenuTab = () => {
    return (
      <div className="messMenuTab">
        <div className="tabName">Mess Menu</div>
        {mess.postsList != (null ) ? (mess.postsList?.map((post, key) => {
          return <MessMenuPost post={post} key={key} />;
        })) : (
          <LoadingTriangle/>
        )}
      </div>
    );
  };
  //the main return
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5 | Mess";
  }
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<MessMenuTab />, <HomeTab />]}
        tabLabels={["Menu", "Mess"]}
      />
    </div>
  );
};

export default Mess;