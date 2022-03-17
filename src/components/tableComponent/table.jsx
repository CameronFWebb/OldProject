import React from 'react';

export default function Table({ data, sortBy, editPopup }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading) =>
              <th key={heading}><button onClick={(e) => sortBy(heading)}>{heading}</button></th>)}
        <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
        <tr key={i}>
          {Object.keys(row).map((columns, i) => (
            <td key={i}>{row[columns]}</td>
          ))}
          <th>
            <button className="editButtons" onClick={(e) => editPopup(row)}>Edit</button>
          </th>
        </tr>      
        ))}
      </tbody>
    </table>
  );
}
