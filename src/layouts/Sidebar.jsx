import React from 'react'
import {BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MdOutlineTaskAlt } from "react-icons/md"
function Sidebar() {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <MdOutlineTaskAlt className='icon_header'/> Task Manager
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/Home">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/AddMembers">
                    <BsFillArchiveFill className='icon'/> Add Member
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/CreateTask">
                    <BsFillGrid3X3GapFill className='icon'/> Create Task
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Demo">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
