import "./mess.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { MessMenuPost } from "../../components/messMenuPost/messMenuPost";
import { FeedPost } from "../../components/feedPost/feedPost";

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
        {home.loading && <LoadingAnimation loadingText={true} marginTop="100px" />}
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
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    );
  };
  //the main return
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