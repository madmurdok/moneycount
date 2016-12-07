import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

class Category extends Component {
    render() {
        return (
            <li className="clearfix">
                <p>{this.props.value}
                    <ButtonGroup className="pull-right">
                        <Button bsStyle="primary">+</Button>
                    </ButtonGroup>
                </p>
            </li>
        )
    }
}


export default Category;