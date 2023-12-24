import "./cult.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";

export const Cult = () => {
  const [homeTabContainer] = useLoadContent("cult/home/home");
  const [feedTabContent] = useLoadContent("cult/feed/feed");
  const [gcTabContent] = useLoadContent("cult/gc/gc");
  const [galaryTabContent] = useLoadContent("cult/galary/galary");
  //components
  const HomeTab = () => {
    return (
      <div className="cultHomeTab homeTabContainer">
        {homeTabContainer !== null ? (
          homeTabContainer?.map((post, key) => {
            return <HomeTab post={post} key={key} />;
          })
        ) : (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
      </div>
    );
  };
  const FeedTab = () => {
    return (
      <div className="cultFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        {feedTabContent !== null ? (
          feedTabContent?.map((post, key) => {
            return <FeedPost post={post} key={key} />;
          })
        ) : (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="cultGCTab GCTabContainer">
        <div className="tabName">GC</div>
        {gcTabContent != null ? (
          gcTabContent?.map((post, key) => {
            return <GCPost post={post} key={key} />;
          })
        ) : (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="cultGalaryTab GalaryTabContainer">
        <div className="tabName">Galary</div>
        {galaryTabContent != null ? (
          galaryTabContent?.map((post, key) => {
            return <GalaryPost post={post} key={key} />;
          })
        ) : (
          <LoadingAnimation loadingText={true} marginTop="100px" />
        )}
      </div>
    );
  };
  //the main return
  return (
    <div>
      {/* the class which containes the tabs has id "tabContainer" */}
      <FooterNav
        tabComponents={[<HomeTab />, <FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Cult", "Feed", "GC", "Galary"]}
      />
    </div>
  );
};
