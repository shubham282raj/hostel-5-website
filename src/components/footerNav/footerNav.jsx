import "./footerNav.css";

export const FooterNav = (props) => {
  const handleTabChange = (tab) => {
    const tabContainer = document.getElementById("tabContainer");
    tabContainer.scrollTo(tabContainer.clientWidth * tab, 0);
    window.scrollTo(0, 0);
  };

  const handleScrolling = () => {
    const tabContainer = document.getElementById("tabContainer");
    // tabContainer.scrollTo(0, 0)
    const rem = tabContainer.scrollLeft / tabContainer.clientWidth;
    const nav = document.getElementsByName("footNavRadio");
    nav[Math.round(rem)].checked = true;
    // }
  };

  return (
    <div>
      <div id="tabContainer" onScroll={() => handleScrolling()}>
        {props.tabComponents.map((tab, key) => {
          return (
            <div className="tab" key={key}>
              {tab}
            </div>
          );
        })}
      </div>
      {props.tabLabels.length > 1 && (
        <div className="footerNav">
          {props.tabLabels.map((label, key) => {
            const labelID = label.toLowerCase();

            return (
              <div className="footNavButton" key={key}>
                {key === 0 ? (
                  <input
                    type="radio"
                    name="footNavRadio"
                    id={labelID}
                    defaultChecked
                  />
                ) : (
                  <input type="radio" name="footNavRadio" id={labelID} />
                )}
                <label onClick={() => handleTabChange(key)}>{label}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
