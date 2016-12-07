import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Category from './category';
import './categories.css';

class CategoriesManager extends Component {
    constructor(){
        super();
        this.state = {list:['one','two','three']};
    }
    render() {
        return (
            <div className="row">
                <Jumbotron className="m-bottom-0">
                    <ul>
                        {this.state.list.map(function(listValue,i){
                            return <Category key={i} value={listValue}/>;
                        })}
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}

export default CategoriesManager;