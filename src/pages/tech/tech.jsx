import "./tech.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";

const Tech = () => {
  const [home] = useLoadContent("tech/home/home");
  const [feed] = useLoadContent("tech/feed/feed");
  const [gc] = useLoadContent("tech/gc/gc");
  const [galary] = useLoadContent("tech/galary/galary");
  //components
  const HomeTab = () => {
    return (
      <div className="techHomeTab homeTabContainer">
        {home.postsList?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
        {home.loading && <LoadingAnimation loadingText={true} marginTop="100px" />}
        {home.hasMore && <button className="tabLoadMoreBtn" onClick={home.loadMore}>Load More</button>}
      </div>
    );
  };
  const FeedTab = () => {
    return (
      <div className="techFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        {feed.postsList?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
        {feed.loading && <LoadingAnimation loadingText={true} marginTop="100px" />}
        {feed.hasMore && <button className="tabLoadMoreBtn" onClick={feed.loadMore}>Load More</button>}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="techGCTab GCTabContainer">
        <div className="tabName">GC</div>
        {gc.postsList?.map((post, key) => {
          return <GCPost post={post} key={key} />;
        })}
        {gc.loading && <LoadingAnimation loadingText={true} marginTop="100px" />}
        {gc.hasMore && <button className="tabLoadMoreBtn" onClick={gc.loadMore}>Load More</button>}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="techGalaryTab GalaryTabContainer">
        <div className="tabName">Galary</div>
        {galary.postsList?.map((post, key) => {
          return <GalaryPost post={post} key={key} />;
        })}
        {galary.loading && <LoadingAnimation loadingText={true} marginTop="100px" />}
        {galary.hasMore && <button className="tabLoadMoreBtn" onClick={galary.loadMore}>Load More</button>}
      </div>
    );
  };
  //the main return
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<HomeTab />, <FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Tech", "Feed", "GC", "Galary"]}
      />
    </div>
  );
};

export default Tech;