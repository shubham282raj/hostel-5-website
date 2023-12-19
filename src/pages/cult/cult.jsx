import "./cult.css";
import "../../components/footerNav/footerNav.css";
import { FooterNav } from "../../components/footerNav/footerNav";

const FeedTab = () => {
    return(<div className="cultFeedTab">Feed Tab</div>)
}
const GCTab = () => {
    return(<div className="gcFeedTab">GC Tab</div>)
}
const GalaryTab = () => {
    return(<div className="galaryFeedTab">Galary Tab</div>)
}

export const Cult = () => {
  return <div>
    {/* the class which containes the tabs has id "tabContainer" */}
    <FooterNav tabComponents={[<FeedTab/>, <GCTab/>, <GalaryTab/>]} tabLabels={["Feed", "GC", "Galary"]} />
  </div>
};
