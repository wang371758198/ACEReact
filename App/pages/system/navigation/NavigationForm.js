import react, { Component } from "react";
import "../../../../www/css/form.css";

class NavigationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="page-content"
        style={{ height: "100%", overflow: "hidden", padding: 0 }}
      >
        <form id="form1">
          <table>
            <tr>
              <th>
                <label> 名 称:</label>
              </th>
              <td>
                <input type="text" id="Title" name="Title"  className="form-contorl col-xs-10" placeholder="名 称" />
              </td>
            </tr>
            <tr>
                <th>
                    <label>父 级:</label>
                </th>
                <td>
                    <select id="ParentPKID" name="ParentPKID" className="form-contorl col-xs-10">
                        <option value="">请选择</option>
                    </select>
                </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default NavigationForm;
