import "./mess.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { FeedPost } from "../../components/feedPost/feedPost";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { GalaryPost } from "../../components/galaryPost/galaryPost";
import { MessMenuPost } from "../../components/messMenuPost/messMenuPost";

export const Mess = () => {
  const  [feedTabContent] = useLoadContent("mess/feed/feed")
  const  [messMenuTabContent] = useLoadContent("mess/menu/menu")
  const  [galaryTabContent] = useLoadContent("mess/galary/galary")
  //components
  const FeedTab = () => {
    return (
      <div className="messFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        {feedTabContent !== (null)? (feedTabContent?.map((post, key) => {
          return <FeedPost post={post} key={key} />;
        })) : (
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    );
  };
  const MessMenuTab = () => {
    return (
      <div className="messMenuTab">
        <div className="tabName">Mess Menu</div>
        {messMenuTabContent != (null ) ? (messMenuTabContent?.map((post, key) => {
          return <MessMenuPost post={post} key={key} />;
        })) : (
          <LoadingAnimation loadingText={true} marginTop="100px"/>
        )}
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="messGalaryTab GalaryTabContainer">
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
        tabComponents={[<FeedTab />, <MessMenuTab />, <GalaryTab />]}
        tabLabels={["Feed", "Menu", "Galary"]}
      />
    </div>
  );
};
