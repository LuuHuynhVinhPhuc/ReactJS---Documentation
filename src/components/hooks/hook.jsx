// react hook = là một function đặc biệt cho phép sử dụng state và các tính năng khác của React mà không cần viết lớp (class)

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AppHook = () => {
    const [name, setName] = useState("Hihi"); // useState 
    const [age, setAge] = useState(10);
    const [isEmploy, setIsEmploy] = useState(false);

    const updateName = () =>{
        setName("Marcus");
    }

    const updateAge =() =>{
        setAge(age+1);
    }

    const EmployStatus =() =>{
        setIsEmploy(!isEmploy);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Is Employ: {isEmploy ? "Is Employ" : "Not Employ"}</p>
            <button onClick={EmployStatus}>Is Employee</button>
        </div>
    );
}

export default AppHook