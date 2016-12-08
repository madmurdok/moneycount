import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

class Category extends Component {
    render() {
        let sub;
        if (this.props.value.children.length > 0) {
            sub = this.props.value.children.map(function (listValue, i) {
                return <Category key={i} value={listValue}/>;
            });
        }
        return (
            <div className="category clearfix">
                <div className="wrapper clearfix">
                {this.props.value.data}
                    <ButtonGroup className="pull-right">
                        <Button bsStyle="success" bsSize="small">
                            <span className="glyphicon glyphicon-plus"></span></Button>
                        <Button bsStyle="danger" bsSize="small">
                            <span className="glyphicon glyphicon-trash"></span></Button>
                    </ButtonGroup>
                    <ButtonGroup className="pull-left m-left-10">
                        <Button bsStyle="primary" bsSize="small">
                            <span className="glyphicon glyphicon-chevron-right"></span></Button>
                    </ButtonGroup>
                </div>
                <div className="sub-wrapper">
                {sub}
                </div>
            </div>
        )
    }
}


export default Category;