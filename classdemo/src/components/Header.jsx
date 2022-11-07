import React, { Component } from "react";
import'../sass/Resume.scss'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
            name: ""
        }
    }

    render(){
        const { linkText, linkUrl } = this.props
        const name = this.state.name
        return(
            <header className={`App-header ${this.state.theme} ${this.state.count}`}>
                <div class="container">
                    <h1>Giovanni Thompson</h1>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHrVEVfkfYbnQ/profile-displayphoto-shrink_800_800/0/1635866182919?e=2147483647&v=beta&t=WIotGrseNynvZA3D1Kg0ZAuKyb8cpm2I2ukxEPRDykE" width="400px" height="400px" border="5px solid #ffffff"></img>
                    <h5>Student, Social Media Manager</h5>
                    <h5><i>Atlanta, GA</i></h5>
                    <center><hr width="50%"></hr></center>
                    <br></br>

                    <i><b><h2><u>WORK EXPERIENCE</u></h2></b></i>
                    <h6>Graphic Designer | Jeremy Anderson Group LLC | <i>Jun 2022-Present</i></h6>
                    <h6>Academic Success Coach | Columbus State University | <i>Aug 2019-Present</i></h6>
                    <h6>Volunteer Engagement Director | Build Your Own Brand, Inc. | Internship | <i>Jan 2021-Feb 2021</i></h6>
                    <h6>Retail Associate | Ross Stores, Inc. | <i>Aug 2020-Dec 2021</i></h6>
                    <h6>Graphic Designer | Build Your Own Brand, Inc. | Internship | <i>Aug 2020-Sep 2020</i></h6>
                    <h6>Media Team | Watch The Yard | Internship | <i>Apr 2020-May 2020</i></h6>
                    <br></br>

                    <i><b><h2><u>SPECIAL RECOGNITION & ACHIEVEMENTS</u></h2></b></i>
                    <h6>2022-23 College Brother of the Year, <i>Alpha Phi Alpha Fraternity, Inc. Georgia District</i></h6>
                    <h6>2021-22 New Fraternity Member of the Year, <i>CSU Greek Life Awards</i></h6>
                    <h6>2021-22 iLEAD 3-Tier Completion Medallion Recipient, <i>CSU Student Life Awards</i></h6>
                    <h6>2021-22 RSO President of the Year, <i>CSU Student Life Awards</i></h6>
                    <h6>2020-21 Brother of the Year, <i>Collegiate 100</i></h6>
                    <h6>2020-21 Emerging Leader of the Year, <i>CSU Student Life Awards</i></h6>

                    <br></br>
                    <i><b><h2><u>CAMPUS LEADERSHIP POSITIONS</u></h2></b></i>
                    <h6>2022-23 Director of Event Programming, <i>Student Government Association</i></h6>
                    <h6>2021-22 Vice President of Programming, <i>National Panhellenic Council</i></h6>
                    <h6>2021-22 Director of Social Activities, <i>Theta Beta Chapter of Alpha Phi Alpha Fraternity, Inc.</i></h6>
                    <h6>2021-22 President, <i>Collegiate 100</i></h6>
                    <h6>2021-22 Recording Secretary, <i>Theta Beta Chapter of Alpha Phi Alpha Fraternity, Inc.</i></h6>
                    <h6>2020-21 Executive Director of 1st Miss Collegiate 100 Pageant, <i>Collegiate 100</i></h6>
                    <h6>2020-21 Emerging Leader of the Year, <i>CSU Student Life Awards</i></h6>
                </div>
        
          </header>
        )
    }
}

export default Header