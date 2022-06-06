import React from "react";

export default function Table() {
  return (
    <div>
      <table>
        <tr>
          <th>
            <button>+</button>
          </th>
          <th>Alert Name</th>
          <th>Independent variable</th>
          <th>Dependent variable</th>
          <th>Frequency</th>
          <th>Save</th>
        </tr>
        <tr>
          <td>
            <button>+</button>
          </td>
          <td>
            <input type="text" name="alertName" value="alert1" />
          </td>
          <td>
            <div>
              <span></span>
              <span></span>
            </div>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  );
}
