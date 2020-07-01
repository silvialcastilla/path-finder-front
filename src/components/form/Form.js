import React from "react";
import './Form.css'


const Form = () => {
    return (
        <form className="form">
            <div className="finder">
                    <label for="origin"></label>
                    <input type="text" id="origin" name="origin" />
                    <label for="destiny"></label>
                    <input type="text" id="destiny" name="destiny" />
            </div>
        </form>
    )
}

export default Form;
