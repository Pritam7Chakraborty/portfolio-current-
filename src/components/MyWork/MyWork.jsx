import React from 'react'
import './MyWork.css'
import arrow_icon from '../../assets/arrow_icon.png'
import mywor_data from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>
                My latest work
            </h1>
        </div>
        <div className="mywork-container">
            {mywor_data.map((work,index)=>{
                return <img key={index} src= {work.w_img} alt="img" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="arrow icon" />
        </div>
    </div>
  )
}

export default MyWork