import React from "react";

const Form = (props) => {
    return(
        <form className="form-group" onSubmit={props.getWeather}>
            <div className="form-group">
                <input
                    type="text"
                    name="city"
                    placeholder="Rentrez ici votre ville..."
                />
            </div>
            <button className="btn btn-success mb-2"> voir </button>
        </form>


    );
}
export default Form;