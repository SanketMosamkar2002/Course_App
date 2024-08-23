import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";


const InstanceTable = () => {
    return (
        <>
            <div>
                <button className="add-btn">
                    List Instances
                </button >
            </div>
            <div className='courseYear'>
                <input type="number" className='yearNSem' name="year" placeholder='Year' />
                <input type="number" className='yearNSem' name="semester" placeholder='Semester' />
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Course Title</th>
                            <th>Course Code</th>
                            <th>Year-5PM</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {courses.map((course, index) => ( */}
                        <tr>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ab voluptate sunt mollitia quo ratione vitae dignissimos dicta facilis reiciendis.</td>
                            <td>161514785</td>
                            <td>2023-1</td>
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
                            <td>2024-1</td>

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
                            <td>2023-3</td>
                            <td>
                                <div className='action'>
                                    <MdDelete style={{ fontSize: "20px" }} />
                                    <FaMagnifyingGlass style={{ fontSize: "18px" }} />
                                </div>
                            </td>
                        </tr>
                        {/* ))} */}
                    </tbody>
                </table>






            </div>
        </>
    )
}

export default InstanceTable
