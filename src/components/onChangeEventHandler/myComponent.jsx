//là một sự kiện trong JavaScript được sử dụng để xử lý các thay đổi xảy ra đối với giá trị của một phần tử HTML, chẳng hạn như các thẻ <input>, <select>, hoặc <textarea>. Sự kiện này được kích hoạt khi người dùng thay đổi giá trị của phần tử và sau đó di chuyển khỏi phần tử đó (bằng cách nhấn Enter hoặc chuyển sang phần tử khác).

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, SetComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function HandlerNameChange(event) {
        setName(event.target.value);
    }

    function HandlerQuantityChange(event){
        setQuantity(event.target.value);
    }

    function HandlerCommentChange(event){
        SetComment(event.target.value);
    }

    function HandlerPaymentChange(event){
        setPayment(event.target.value);
    }

    function HandlerShippingChange(event){
        setShipping(event.target.value);
    }
    return (
        <div>
            <input type="text" value={name} onChange={HandlerNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={HandlerQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={HandlerCommentChange} placeholder="Enter delivery instruction"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={HandlerPaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={HandlerShippingChange}/>
                Pickup
            </label> <br />
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={HandlerShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent
