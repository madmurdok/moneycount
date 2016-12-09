import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

class Category extends Component {
    constructor(){
        super();
        this.state = {isOpen:false}
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        let sub, sign;
        if (this.props.value.children.length > 0 && this.state.isOpen) {
            sub = this.props.value.children.map(function (listValue, i) {
                return <Category key={i} value={listValue}/>;
            });
        }
        if (this.state.isOpen) {
            sign = <span className="glyphicon glyphicon-chevron-down"></span>
        } else {
            sign = <span className="glyphicon glyphicon-chevron-right"></span>
        }
        return (
            <div className="category clearfix">
                <div className="wrapper clearfix">
                    {this.props.value.data}
                    <ButtonGroup className="pull-left m-left-10">
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>
                            {sign}
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="pull-right">
                        <Button bsStyle="success" bsSize="small">
                            <span className="glyphicon glyphicon-plus"></span></Button>
                        <Button bsStyle="danger" bsSize="small">
                            <span className="glyphicon glyphicon-trash"></span></Button>
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