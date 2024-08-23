import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Table = () => {
    return (
        <>
            <button className="add-btn">
                List Courses
            </button>
            <div className="table-container">
              
            <table>
                    <thead>
                        <tr>
                            <th>Course Title</th>
                            <th>Course Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab voluptate sunt mollitia quo ratione vitae dignissimos dicta facilis reiciendis.</td>
                            <td>161514785</td>
                            <td>
                                <div className='action'>
                                    <MdDelete style={{ fontSize: "20px" }} />
                                    <FaMagnifyingGlass style={{ fontSize: "18px" }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab voluptate sunt mollitia quo ratione vitae dignissimos dicta facilis reiciendis.</td>
                            <td>161514785</td>
                            <td>
                                <div className='action'>
                                    <MdDelete style={{ fontSize: "20px" }} />
                                    <FaMagnifyingGlass style={{ fontSize: "18px" }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab voluptate sunt mollitia quo ratione vitae dignissimos dicta facilis reiciendis.</td>
                            <td>161514785</td>
                            <td>
                                <div className='action'>
                                    <MdDelete style={{ fontSize: "20px" }} />
                                    <FaMagnifyingGlass style={{ fontSize: "18px" }} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Table
