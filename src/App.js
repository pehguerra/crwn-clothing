import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage'

const TopicsList = () => (
    <div>
        <h1>TOPICS LIST PAGE</h1>
    </div>
)

const TopicDetail = (props) => {
    console.log(props)

    return (
        <div>
            <h1>TOPICS DETAILS PAGE</h1>
        </div>
    )
}

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/topics' component={TopicsList} />
                <Route exact path='/topics/:topicId' component={TopicDetail} />
            </Switch>
        </div>
    );
}

export default App;
