import React, { Component } from "react";
import { Table } from "reactstrap";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "../common/Styles.css";

class LeaveCategory extends Component {
  render() {
    return (
      <div className="mainContainerFlex">
        <div className="headerContainerFlex">
          <span className="header">
            <h3 className="headerStyle">List of Leave Category</h3>
          </span>
        </div>
        <br />
        <div className="tableContainerFlex">
          <div style={{ textAlign: "right" }}>
            <Button
              component={Link}
              to="/addleavecategory"
              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
            >
              <span className="fa fa-plus" style={{ margin: '0px 10px 0px 0px' }}></span> New
            </Button>
            <br />
            <br />
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>Leave Code</th>
                <th>Description</th>
                <th>Entitlement</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td>
                  <Button
                    component={Link}
                    to="/editleavecategory"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: 'none' }}
                  >
                    <span className="fa fa-edit"></span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default LeaveCategory;