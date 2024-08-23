import React from 'react'

const Dashboard = () => {
    return (
        <div className='container'>
            <div className="infoContainer">
                <aside className='leftAside'>
                    <div className='course_info'>
                        <input type="text" name="courseTitle" className="infoFields" placeholder='Course title' />
                        <input type="text" name="courseCode" className="infoFields" placeholder='Course code' />
                        <input type="text" name="courseDesc" className="infoFields" placeholder='Course description' />
                        <div className='course_btn'><button className='addCourseBtn'>Add course</button></div>
                    </div>
                </aside>
                <aside className='rightAside'>
                    <div className="courseInfoContainer">
                        <div className="courseYearDropdown">
                            <p>Select Course Name:</p>
                            <select name="course" id="course">
                                {
                                    ["Select a course", "Java", "Python", "C#", "React Js"].map((value, i) => {
                                        return (
                                            <option disabled={i === 0} selected={i === 0} value={value} key={i}>{value}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='courseYear'>
                            {/* <div> */}
                                <input type="number" className='yearNSem' name="year" placeholder='Year' />
                                <input type="number" className='yearNSem' name="semester" placeholder='Semester' />
                            {/* </div> */}
                        </div>
                        <div className='course_btn'><button className='addCourseBtn'>Add instance</button></div>



                    </div>
                </aside>

            </div>
            <div></div>
            <div></div>


        </div>
    )
}

export default Dashboard
