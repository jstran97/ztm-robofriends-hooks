import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [clickCount, setClickCount] = useState(0); // For useEffect() code experiment + useEffect() usage understanding

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});

        console.log(robots, searchField, clickCount);
    }, [clickCount]) // useEffect() runs only when a specifically listed state variable's state changes (i.e, if [clickCount] and clickCount num gets incremented)


    const onSearchChange = (event) => {
        console.log(event.target.value);

        // this.setState({ searchField: event.target.value });
        setSearchField(event.target.value);
    }


    // const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })



    // console.log("filteredRobots: ", filteredRobots);

    if (robots.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>

                {/*  // For useEffect() code experiment + useEffect() usage understanding */}
                <button onClick={() => setClickCount(clickCount+1)}>Click Me to Count!</button>

                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;