import "./tech.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";

export const Tech = () => {
  const  [feedTabContent] = useLoadContent("tech/feed/feed")
  const  [gcTabContent] = useLoadContent("tech/gc/gc")
  const  [galaryTabContent] = useLoadContent("tech/galary/galary")
  //components
  const FeedTab = () => {
    return (
      <div className="techFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        {feedTabContent !== (null)? (feedTabContent?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })) : (
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="techGCTab GCTabContainer">
        <div className="tabName">GC</div>
        {gcTabContent != (null ) ? (gcTabContent?.map((post, key) => {
          return <GCPost post={post} key={key} />;
        })) : (
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="techGalaryTab GalaryTabContainer">
        <div className="tabName">Galary</div>
        {galaryTabContent != (null) ? (galaryTabContent?.map((post, key) => {
          return <GalaryPost post={post} key={key} />;
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
        tabComponents={[<FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Feed", "GC", "Galary"]}
      />
    </div>
  );
};
