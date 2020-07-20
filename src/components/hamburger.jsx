import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'gatsby';

export default class Hamburger extends Component {
    showSettings (event) {
        event.preventDefault();
      }

    render() {
        return (
            <Menu>
                <Link to ='/'>Home</Link>
            </Menu>
        )
    }
}
