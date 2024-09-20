/* eslint-disable no-unused-vars */

import Card from "./components/card";
import Button from "./components/buttons/button";
import Student from "./components/prop/student";
import UserGreeting from "./components/conditional-rendering/User-Greeting";
import List from "./components/render-list/list";
import Buttonclick from "./components/click-event/button-click";

import AppHook from "./components/hooks/hook";
import Counter from "./components/hooks/counter";
import MyComponent from "./components/onChangeEventHandler/myComponent";
import ColorPicker from "./components/Colorpicker/ColorPicker";
import UpdateObjectInState from "./components/hooks/updateObjectInState";
import UpdateArrayinState from "./components/updateArrayinState/UpdateArrayinState";
import ProfilePicture from "./components/click-event/profile-picture";
import UpdateArrayofObject from "./components/updateArrayofObjectinState/UpdateArrayofObject";




function App() {

  // const fruits = [
  //   { id: 1, name: "Apple", calories: 95 },
  //   { id: 2, name: "Banana", calories: 105 },
  //   { id: 3, name: "Orange", calories: 45 },
  //   { id: 4, name: "Grape", calories: 100 },
  //   { id: 5, name: "Strawberry", calories: 90 },
  // ];

  // const vegetables = [
  //   { id: 1, name: "Carrot", calories: 25 },
  //   { id: 2, name: "Broccoli", calories: 34 },
  //   { id: 3, name: "Spinach", calories: 23 },
  //   { id: 4, name: "Cucumber", calories: 16 },
  //   { id: 5, name: "Tomato", calories: 22 }
  // ];

  // Card and Props
  // return(
  //   // <>
  //   //   {/* <Card/>
  //   //   <br />
  //   //   <Button/>

  //   //   <Student name= "Marcus" age={30} isStudent={true}/>
  //   //   <Student name="Kim Ngọc" age={28} isStudent={false}/>
  //   //   <Student/>

  // <UserGreeting isLoggedIn={true} userName="Marcus" /> */
  // }


  //   //   {/* {List items} */}
  //   //   <List/>
  //   //   {/* Another solution */}
  //   //   List items
  //   // </>
  // );

  // List
  // return (
  //   // <>
  //   //   {fruits.length > 0 ? <List items={fruits} category= "Fruits" /> : null}
  //   //   {vegetables.length > 0 ? <List items= {vegetables} category= "Vegetables"/> : null}
  //   // </>

  //   // another way 
  //   <>
  //     {fruits.length > 0 && <List items={fruits} category="Fruits" />}
  //     {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
  //   </>
  // );

  // return(
  //   <div>
  //     <ProfilePicture/>
  //   </div>
  // );

  return (
    <>
      {/* <UpdateObjectInState/> */}
      {/* <UpdateArrayinState /> */}
      <UpdateArrayofObject/>
    </>
  );

  // return(
  //   <MyComponent/>
  // );

  // return(
  //   <ColorPicker/>
  // )
}

export default App
