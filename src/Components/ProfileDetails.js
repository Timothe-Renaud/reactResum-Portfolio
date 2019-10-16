import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
export default class ProfileDetails extends React.Component {
  render() {
    return (
      <Table borderless>
        <tbody>
          <tr>
            <td className="text-dark">Profession</td>
            <td className="text-dark">{Constants.TitrePro}</td>
          </tr>
          <tr>
            <td className="text-dark">Mail</td>
            <td className="text-dark">{Constants.EmailAddress}</td>
          </tr>
          <tr>
            <td className="text-dark">Localisation</td>
            <td className="text-dark">{Constants.Home}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
