import React, {Component} from 'react';
import {Button, ButtonToolbar, Jumbotron} from 'react-bootstrap';
import './accounts.css';
class Accounts extends Component {
    render() {
        return (
            <div className="row">
                <Jumbotron className="p-sides-20">
                    <p>
                        Current amount {this.props.amount}
                    </p>
                    <ButtonToolbar className="pull-right clearfix">
                        <Button bsStyle="primary">Add account</Button>
                    </ButtonToolbar>
                </Jumbotron>

            </div>
        )
    }
}

export default Accounts;