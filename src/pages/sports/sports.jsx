import "./sports.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GCPost } from "../../components/GCPost/gcPost";
import { GalaryPost } from "../../components/galaryPost/galaryPost";

export const Sports = () => {
  const  [homeTabContainer] = useLoadContent("sports/home/home")
  const  [feedTabContent] = useLoadContent("sports/feed/feed")
  const  [gcTabContent] = useLoadContent("sports/gc/gc")
  const  [galaryTabContent] = useLoadContent("sports/galary/galary")
  //components
  const HomeTab = () => {
    return(
      <div className="sportsHomeTab homeTabContainer">
        {homeTabContainer !== (null)? (homeTabContainer?.map((post, key) => {
          return <HomeTab post={post} key={key} />;
        })) : (
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    )
  }
  const FeedTab = () => {
    return (
      <div className="sportsFeedTab feedTabContainer">
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
      <div className="sportsGCTab GCTabContainer">
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
      <div className="sportsGalaryTab GalaryTabContainer">
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
        tabComponents={[<HomeTab />, <FeedTab />, <GCTab />, <GalaryTab />]}
        tabLabels={["Sports", "Feed", "GC", "Galary"]}
      />
    </div>
  );
};
