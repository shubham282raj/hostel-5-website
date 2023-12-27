import { useNavigate } from "react-router-dom"


const Council = () => {

    const navigate = useNavigate();

    return <div>
        This is the council page
        <button onClick={()=>navigate('login')}>Go to login Page</button>
    </div>
}

export default Council;