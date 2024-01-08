import "./cult.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";

const Cult = () => {
  const [feed] = useLoadContent("cult/feed/feed");
  const [gc] = useLoadContent("cult/gc/gc");
  const [galary] = useLoadContent("cult/galary/galary");
  //components
  const FeedTab = () => {
    return (
      <div className="cultFeedTab feedTab">
        <div className="tabName">Feed</div>
        <div className="feedTabPosts tabPosts">
          {feed.postsList?.map((post, key) => {
            return <FeedPost post={post} key={key} />;
          })}
        </div>
        {feed.loading && (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
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
      <div className="cultGCTab GCTab">
        <div className="tabName">GC</div>
        <div className="GCTabPost tabPosts">
          {gc.postsList?.map((post, key) => {
            return <GCPost post={post} key={key} />;
          })}
        </div>
        {gc.loading && (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
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
      <div className="cultGalaryTab galaryTab">
        <div className="tabName">Galary</div>
        <div className="galaryTabPosts tabPosts">
          {galary.postsList?.map((post, key) => {
            return <GalaryPost post={post} key={key} />;
          })}
        </div>
        {galary.loading && (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
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
    hostelHeading.textContent = "Hostel 5 | Cult";
  }
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Feed", "GC", "Galary"]}
      />
    </div>
  );
};

export default Cult;
