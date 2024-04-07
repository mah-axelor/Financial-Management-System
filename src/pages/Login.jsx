import { useAuth } from "../contexts/authContext"

export default function(){
const {currentUser} = useAuth()
    return <div>
        <input type="text"/>
        <button >sign in</button>
        <br/>
        {currentUser.name}
    </div>
}