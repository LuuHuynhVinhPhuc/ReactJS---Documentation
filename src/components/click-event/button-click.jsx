
function Buttonclick() {

    // tạo một biến chứa dữ liệu 
    const handleAlert = (name) => {
        console.log(name + " stop clicking this button !!");
    };
    
    // return về một button có chứa dữ liệu bằng onClick()
    return(
        <div>
            <button onClick={() => handleAlert("Marcus")}>Click me 😊</button>
        </div>
    );
}

export default Buttonclick;