import ContinueWithGoogle from "../components/ContinueWithGoogle"
import { useAuth } from "../contexts/authContext"


export default function Login(){
const {currentUser} = useAuth()
    return <ContinueWithGoogle style={{marginLeft:"12px"}}/>
}
