import React from 'react';

export default function Popup({ data, handlePopupVis }) {
  //a variable that holds the mapped html 

  const x = (column, i) => {
    return (
    <label key={i}>
    {column}     
    <input type="text" defaultValue={data[column]}/> 
    </label>   
    )};
  //create a submit button to return to app.js where the state of the popup is updated
  
  return (
    <div className="popupMain">
      {
        Object.keys(data).map((column, i) => {
          return (x(column, i));
        })
      }

      <input className="submit" key="button" type="submit" value="Submit" onClick={(e) => handlePopupVis()}/>
      <input className="close" key="buttonClose" type="submit" value="Close" onClick={(e) => handlePopupVis()}/>
    </div>
  );
}