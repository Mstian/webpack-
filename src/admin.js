"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import './admin.less';
import './admin.scss';
import img from './img/bg.png';
import daixu from './img/daixu.jpg'
class Admin extends React.Component{
    render(){
        return (
            <div className="admin">
                Admin Text222ddd
                <div className="text">Sass Text watch</div>
                <div>
                    <img src={img}/>
                </div>
                <div>
                    <img src={daixu}/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Admin/>,
    document.getElementById("root")
)