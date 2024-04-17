export default function ContinueWithGoogle(props){
    const style = props.style;
        return <div  style={style}>                
                <div className="google-btn">
                <div className="google-icon-wrapper">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256" className="google-icon" alt="Google Icon"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
                </div>
                <br/>
           
        </div>
    }