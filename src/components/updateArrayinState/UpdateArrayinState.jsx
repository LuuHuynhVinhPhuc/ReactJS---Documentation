// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const UpdateArrayinState = () => {

    // default array
    const [food, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("FoodInput").value;
        // when enter will set place holder 
        document.getElementById("FoodInput").value = "";

        setFoods([...food, newFood]);
    }
    function handleDeleteFood(index){
        setFoods(food.filter((_, i)=> i!== index ));
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((food, index) => <li key={index} onClick={() => handleDeleteFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="FoodInput" placeholder='Enter Food Name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArrayinState