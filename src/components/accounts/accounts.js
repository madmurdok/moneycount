import React, {Component} from 'react';
import {Button, ButtonToolbar, Jumbotron, Table} from 'react-bootstrap';
import './accounts.css';
class Accounts extends Component {
    render() {
        return (
            <div className="row">
                <Jumbotron className="p-sides-20">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Account name</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Salary account</td>
                            <td>{this.props.amount}</td>
                            <td>rub</td>
                        </tr>
                        </tbody>
                    </Table>
                    <ButtonToolbar className="pull-right clearfix">
                        <Button bsStyle="primary">Add account</Button>
                    </ButtonToolbar>
                </Jumbotron>

            </div>
        )
    }
}

export default Accounts;