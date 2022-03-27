import React from "react";
import {Link} from "react-router-dom";
import Classes from './classes';
import Styles from './styles';
import ConditionalOutput from './conditional-output';
import ToDoList from './todo/todo-list.js';

const Index = () => {
    return(
        <>
            <div>
                <h1>Labs</h1>
                <ToDoList/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
            </div>


            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default Index;
