import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Category from './category';

class CategoriesManager extends Component {
    render() {
        return (
            <div className="row">
                <Jumbotron>
                    <ul>
                        <Category/>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}

export default CategoriesManager;