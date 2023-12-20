import "./cult.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";

export const Cult = () => {
  const  [feedTabContent] = useLoadContent("cult/feed/feed")
  const  [gcTabContent] = useLoadContent("cult/gc/gc")
  const  [galaryTabContent] = useLoadContent("cult/galary/galary")
  //components
  const FeedTab = () => {
    return (
      <div className="cultFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        {feedTabContent?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
        {console.log(feedTabContent)}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="cultGCTab GCTabContainer">
        <div className="tabName">GC</div>
        {gcTabContent?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="cultGalaryTab GalaryTabContainer">
        <div className="tabName">Galary</div>
        {galaryTabContent?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })}
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
