import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Category from './category';
import './categories.css';

class CategoriesManager extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {data: 'one', children: [
                    {data: 'four', children: [
                        {data:'five', children: []}
                    ]}
                ]},
                {data: 'two', children: []},
                {data: 'three', children: []}]
        };
    }

    render() {
        return (
            <div className="row">
                <Jumbotron className="m-bottom-0">
                    {this.state.list.map(function (listValue, i) {
                        return <Category key={i} value={listValue}/>;
                    })}
                </Jumbotron>
            </div>
        )
    }
}

export default CategoriesManager;