import React from 'react';
import '../filter/filter.css';

const Infowrapper = (props) => {
    return (
      <div className="info-wrapper" >
        {/* <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div className="info-content">
          <div>
            <b>User selected:</b> `${props.firstName} ${props.lastName}`
          </div>
          <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" readonly>
              {props.description}
            </textarea>
          </div>
          <div>
            <b>Address:</b>
            {props.address.streetAddress}
          </div>
          <div>
            <b>City:</b>
            {props.address.city}
          </div>
          <div>
            <b>State:</b>
            {props.address.state}
          </div>
          <div>
            <b>Zip:</b>
            {props.address.zip}
          </div>
        </div> */}
      </div>
    );
}
 
export default Infowrapper;