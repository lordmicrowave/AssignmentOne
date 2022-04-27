import React, { Component } from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import {Link} from 'react-router-dom';
import '../styles/Menu.css';
import { mergeBreakpointsInOrder } from '@mui/system';



export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="menuTitle">Nose Cuffs</h1>
                <div className="menuList">
                    {MenuList.map((menuItem, value) => {
                        return(
                            <MenuItem value={value} name={menuItem.name} price={menuItem.price} read={menuItem.read} image={menuItem.image}/>
                        )
                    })}
                </div>
              
            </div>
        )
    }
}
