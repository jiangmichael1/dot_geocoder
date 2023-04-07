import React from 'react';
import axios from 'axios';

const RequestForm = (functionType, borough, addressNum, streetName, key) => {
    return (
        <div>
            <form className='request_form'>
                <select name="Function Type">
                    <option value="Function 1A"></option>
                </select>
                <input placeholder="Borough" type="text"></input>
                <input placeholder="Address Number" type="text"></input>
                <input placeholder="Street Name" type="text"></input>
                <input placeholder="API Key" type="text"></input>
                
            </form>
        </div>
    )
}

export default RequestForm;