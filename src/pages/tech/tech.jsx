import "./tech.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";
import { LoadingTriangle } from "../../components/loadingTriangle/loadingTriangle";

const Tech = () => {
  const [feed] = useLoadContent("tech/feed/feed");
  const [gc] = useLoadContent("tech/gc/gc");
  const [galary] = useLoadContent("tech/galary/galary");
  //components
  const FeedTab = () => {
    return (
      <div className="techFeedTab feedTab">
        <div className="tabName">Feed</div>
        <div className="feedTabPosts tabPosts">
          {feed.postsList?.map((post, key) => {
            return <FeedPost post={post} key={key} />;
          })}
        </div>
        {feed.loading && <LoadingTriangle />}
        {feed.hasMore && (
          <button className="tabLoadMoreBtn" onClick={feed.loadMore}>
            Load More
          </button>
        )}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="techGCTab GCTab">
        <div className="tabName">GC</div>
        <div className="GCTabPost tabPosts">
          {gc.postsList?.map((post, key) => {
            return <GCPost post={post} key={key} />;
          })}
        </div>
        {gc.loading && <LoadingTriangle />}
        {gc.hasMore && (
          <button className="tabLoadMoreBtn" onClick={gc.loadMore}>
            Load More
          </button>
        )}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="techGalaryTab GalaryTab">
        <div className="tabName">Gallery</div>
        <div className="galaryTabPosts tabPosts">
          {galary.postsList?.map((post, key) => {
            return <GalaryPost post={post} key={key} />;
          })}
        </div>
        {galary.loading && <LoadingTriangle />}
        {galary.hasMore && (
          <button className="tabLoadMoreBtn" onClick={galary.loadMore}>
            Load More
          </button>
        )}
      </div>
    );
  };
  //the main return
  const hostelHeading = document.getElementById("navbarHostelName");
  if (hostelHeading) {
    hostelHeading.textContent = "Hostel 5 | Tech";
  }
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Feed", "GC", "Gallery"]}
      />
    </div>
  );
};

export default Tech;
