import ContinueWithGoogle from "../components/ContinueWithGoogle"
import { useAuth } from "../contexts/authContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function(){
const {currentUser} = useAuth()
    return <ContinueWithGoogle style={{marginLeft:"12px"}}/>
}