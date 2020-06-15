import React, {Fragment} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import { robots } from './robots';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => `${robot.fname.toLowerCase()} ${robot.lname.toLowerCase()}`.includes(this.state.searchfield.toLowerCase()));
        return (
            <Fragment>
                <h1 className='tc f1'>Robot Friends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </Fragment>
        );
    }
};

export default App;