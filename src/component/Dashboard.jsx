import React from 'react'

const Dashboard = () => {
    return (
        <div className='container'>
            <div className="infoContainer">
                <aside className='leftAside'>
                    <div className='course_info'>
                        <input type="text" name="courseTitle" className="infoFields" placeholder='Course title'/>
                        <input type="text" name="courseCode" className="infoFields" placeholder='Course code' />
                        <input type="text" name="courseDesc" className="infoFields" placeholder='Course description'/>
                        <div className='course_btn'><button className='addCourseBtn'>Add course</button></div>
                    </div>
                </aside>
                <aside className='rightAside'></aside>

            </div>
            <div></div>
            <div></div>


        </div>
    )
}

export default Dashboard
