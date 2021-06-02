import React from 'react';
import './filter.css';

const Filter =(props)=>{
    return (
      <div>
        <tr className="data-row">
          <td className="column1">{props.id}</td>
          <td className="column2">{props.firstName}</td>
          <td className="column3">{props.lastName}</td>
          <td className="column4">{props.email}</td>
          <td className="column5">{props.phone}</td>
        </tr>

       
      </div>
    );
}

export default Filter;