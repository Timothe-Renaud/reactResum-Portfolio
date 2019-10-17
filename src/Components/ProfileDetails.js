import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
export default class ProfileDetails extends React.Component {
  render() {
    return (
      <Table borderless>
        <tbody>
          <tr>
            <td className="name">
              <u>Profession</u>
            </td>
            <td className="">{Constants.TitrePro}</td>
          </tr>
          <tr>
            <td className="name lead">
              <u>Mail</u>
            </td>
            <td className="">{Constants.EmailAddress}</td>
          </tr>
          <tr>
            <td className="name lead">
              <u>Localisation</u>
            </td>
            <td className="">{Constants.Home}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
