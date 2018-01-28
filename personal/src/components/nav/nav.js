import React, { Component } from 'react';
import './nav.css';
import './instruments/ints.css';
import {Link} from 'react-router-dom';


export default class Nav extends Component {
    constructor() {
        super();

        this.state = {
            on: false,
            hide: {
                height: "0px"
            }
        }
    }

    showHidden() {
        if(!this.state.on) {
            this.setState({
                on: true,
                hide: {
                    height: "80px"
                }
            })
        } else if(this.state.on) {
            this.setState({
                on: false,
                hide: {
                    height: "0px"
                }
            })
        }
    }
    render() {
        return (
            <div className="drop-menu">
                <div className="nav-main">
                    <div className="nav-cont">
                    <button onClick={() => this.showHidden()} className="alt">V</button>
                        <Link to="/home" className="nav-com"><span>Home</span></Link>
                        <span onClick={() => this.showHidden()} className="nav-com">Stuff</span>
                    </div>
                    <div></div>
                </div>
                <div style={this.state.hide} className="ints-main">
                    <div className="ints-cont">
                        <Link to="/forum"><div onClick={() => this.showHidden()} className="int">Forum</div></Link>
                        <Link to="/map"><div className="int">Search</div></Link>
                        <Link to="/profile" className="int"><div>Profile</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}