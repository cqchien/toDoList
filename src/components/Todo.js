import React, {Component} from 'react';
import classNames from 'classnames';
import './Todo.css';
import checkIcon from './icon-img/check.svg';
import checkCompletedIcon from './icon-img/check-Completed.svg';

class ToDo extends Component{
    render(){  
        const { item, onClickItem } = this.props;
        let urlIcon = checkIcon;
        if(item.isCompleted){
            urlIcon = checkCompletedIcon;
        }

        return(
            <div className = {classNames('ToDoItem', {
                'ToDoItem-completed': item.isCompleted, 
            })}>
                <img onClick = {onClickItem} src = {urlIcon} width = {35} height = {40} ></img>
                <p className = 'content'>{this.props.item.title}</p>
            </div>
        )
    }
}
export default ToDo;