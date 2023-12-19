import "./cult.css";
import "../../components/footerNav/footerNav.css";
import { FooterNav } from "../../components/footerNav/footerNav";
import {LoadPost} from "../../components/loadPost/loadPost"

export const Cult = () => {
  //components
  const FeedTab = () => {
    return (
      <div className="cultFeedTab">
        <div className="tabName">Feed Tab</div>
        <LoadPost path="cult"/>
      </div>
    );
  };
  const GCTab = () => {
    return (
      <div className="gcFeedTab">
        <div className="tabName">GC Tab</div>
      </div>
    );
  };
  const GalaryTab = () => {
    return (
      <div className="galaryFeedTab">
        <div className="tabName">Galary Tab</div>
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
