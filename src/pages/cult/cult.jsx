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
        <div className="tabName">Feed Tab</div>
        {feedTabContent?.map((post) => {
          return <FeedPost post={post} />;
        })}
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="cultGCTab GCTabContainer">
        <div className="tabName">GC Tab</div>
        {gcTabContent?.map((post) => {
          return <FeedPost post={post} />;
        })}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="cultGalaryTab GalaryTabContainer">
        <div className="tabName">Galary Tab</div>
        {galaryTabContent?.map((post) => {
          return <FeedPost post={post} />;
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
