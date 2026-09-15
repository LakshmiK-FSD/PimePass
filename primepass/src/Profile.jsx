import defaultprof from "./assets/profuser.png"
function Profile(props){
       const profile=props.profileuse || defaultprof;
    return(
        <div id="usprofile" >
            <img id="imagecs" src={profile} alt="" />
        </div>
        
    );
}
export default Profile;