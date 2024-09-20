
import Proptypes from 'prop-types'


function List(props) {

    const category = props.category;
    const itemList = props.items;
    // const fruits = ["Apple", "Banana", "Orange", "Grape", "Strawberry"];
    // fruits.sort();
    const listItems = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>)


    // const fruits2 = [
    //     { id: 1, name: "Apple", calories: 95 },
    //     { id: 2, name: "Banana", calories: 105 },
    //     { id: 3, name: "Orange", calories: 45 },
    //     { id: 4, name: "Grape", calories: 100 },
    //     { id: 5, name: "Strawberry", calories: 90 },
    // ];
    // fruits2.sort((a, b) => a.name.localeCompare(b.name));

    // // for reverse
    // // fruits2.sort((a,b) => b.name.localeCompare(a.name));

    // //map
    // const listItems2 = fruits2.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)

    // // finding
    // const lowCalFruit = fruits2.filter(fruit => fruit.calories < 100);
    // const listLowCalFruit = lowCalFruit.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)

    // const hightCalFruit = fruits2.filter(fruit => fruit.calories > 100);
    // const listHightCalFruit = hightCalFruit.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>)

    return (
        // <>
        //     <div className="ol-items-list">
        //         <ol>{listItems2}</ol>
        //         <br />
        //         <ol>{listLowCalFruit}</ol>
        //         <br />
        //         <ol>{listHightCalFruit}</ol>
        //     </div>
        // </>
        
        <>
            <h3 className='category-title'>{category}</h3>
            <ol className='items-category'>{listItems}</ol>
        </>
    );
}

List.propTypes= {
    name: Proptypes.string,
    category: Proptypes.string,
    items: Proptypes.arrayOf(Proptypes.shape({id: Proptypes.number, name: Proptypes.string, calories: Proptypes.number}))
};

List.defaultProps={
    category: "Category",
    item: [],
}
export default List;
