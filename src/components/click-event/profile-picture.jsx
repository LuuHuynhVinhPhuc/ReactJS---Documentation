

// function
function ProfilePicture(){
    const imgUrl = './src/assets/Phuc.jpg';

    const handleClick = () => console.log("Ouch");

    return(<img className="imgPhoto" src={imgUrl} onClick={handleClick} alt="Marcus photo" ></img>);
}

// export 
export default ProfilePicture;