function Food(){
    const food1 = "Orange";
    const food2 = "Banana";
    const food3 = "Apple";

    return(
        <ul>
            <li className="items-food">{food1}</li>
            <li className="items-food">{food2}</li>
            <li className="items-food">{food3.toUpperCase()}</li>
        </ul>
    );
}

export default Food