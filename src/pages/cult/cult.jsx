import "./cult.css";
import "../../components/footerNav/footerNav.css";
import { FooterNav } from "../../components/footerNav/footerNav";

const FeedTab = () => {
    return(<div>Feed Tab</div>)
}
const GCTab = () => {
    return(<div>GC Tab</div>)
}
const GalaryTab = () => {
    return(<div>Galary Tab</div>)
}

export const Cult = () => {
  return <div>
    {/* the class which containes the tabs has id "tabContainer" */}
    <FooterNav tabComponents={[<FeedTab/>, <GCTab/>, <GalaryTab/>]} tabLabels={["Feed", "GC", "Galary"]} />
  </div>
};
