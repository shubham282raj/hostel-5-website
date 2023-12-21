import "./loadingAnimation.css"

export const LoadingAnimation = ({loadingText=true, marginTop="5px"}) => {
    return(<div className="loadingAnim" style={{marginTop: marginTop}}>
        <div className="loadingSubdiv"></div>
        <div className="loadingSubdiv"></div>
        <div className="loadingSubdiv"></div>
        <div className="loadingSubdiv"></div>
        {loadingText && <div className="loadingText">Loading</div>}
        {/* <div className="loadingSubdiv"></div> */}
    </div>)
}

export const NoContent = () => {
    return(<div>
        Failed To Load
    </div>)
}