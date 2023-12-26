import "./mess.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import { useLoadContent } from "../../components/loadPost/useLoadContent";
import { LoadingAnimation } from "../../components/loadingAnimation/loadingAnimation";
import { MessMenuPost } from "../../components/messMenuPost/messMenuPost";

export const Mess = () => {
  const  [mess] = useLoadContent("mess/menu/menu", 1)
  //components
  const FeedTab = () => {
    return (
      <div className="messFeedTab feedTabContainer">
        <div className="tabName">Feed</div>
        
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
  const GalaryTab = () => {
    return (
      <div className="messGalaryTab GalaryTabContainer">
        <div className="tabName">Galary</div>
        
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
