import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import React, {Component} from 'react';
import logo from '../logo.svg';
import Accounts from './accounts/accounts';
import CategoriesManager from './categories/categories';
import StatisticManager from './statistics/statisticGraph';

class App extends Component {
    componentWillMount() {
        this.setState({list: ['test1', 'test2']});
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Money Manager</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-2">
                        <Accounts amount="10000"/>
                    </div>
                    <div className="col-md-4">
                        <StatisticManager />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-2">
                        <CategoriesManager list={this.state.list}/>
                    </div>
                    <div className="col-md-4">.col-md-4</div>
                </div>
            </div>
        );
    }
}

export default App;
