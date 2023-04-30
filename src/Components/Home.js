import React from 'react'
import "./Home.css"
import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks} from 'react-icons/fa'
function Home() {
  return (
    <div className='d-flex home'>
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
                <li className='nav-item '>                    
                    <a href="/#" className='nav-link text-white active'>
                        <FaSafari/> <span className='ms-2'>Dashboard</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="/#" className='nav-link text-white'>
                        <FaCartArrowDown/> <span className='ms-2'>Teacher</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="!#" className='nav-link text-white'>
                        <FaUserAlt/> <span className='ms-2'>Students</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="!#" className='nav-link text-white'>
                        <FaTasks/> <span className='ms-2'>Report</span>
                    </a>
                </li>
            </ul>

        </div>
        <div className='content container mt-3'>
            <div className='row'>
                <div className='col-md-3 text-white col bg-success d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Students</p>
                    <FaCartArrowDown />
                </div>
                <div className='col-md-3 text-white col bg-danger d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Teacher</p>
                    <FaCartArrowDown />
                </div>
                <div className='col-md-3 text-white col bg-warning d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Admin</p>
                    <FaCartArrowDown />
                </div>
                <div className='col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Report</p>
                    <FaCartArrowDown />
                </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <h2>Students</h2>
                <button className="btn btn-success">+Add</button>
            </div>
            <table class="table w-100">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Depart</th>
                        <th scope="col">Student Details</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1,001</td>
                        <td>Student 1</td>
                        <td>CSE</td>
                        <td>COMPUTER SCIENCE</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,002</td>
                        <td>Student 2</td>
                        <td>ECE</td>
                        <td>ELEC AND COMM</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,003</td>
                        <td>Student 3</td>
                        <td>EEE</td>
                        <td>ELEC AND ELECT</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,004</td>
                        <td>Student 4</td>
                        <td>CIV</td>
                        <td>CIVIL</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,005</td>
                        <td>Student 5</td>
                        <td>MECH</td>
                        <td>MECHANICAL</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,006</td>
                        <td>Student 6</td>
                        <td>ART</td>
                        <td>ARTS AND SCIENCE</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                    <tr>
                        <td>1,007</td>
                        <td>Student 7</td>
                        <td>SCIENCE</td>
                        <td>ART AND SCIENCE</td>
                        <td><button class="btn btn-success mx-2">U</button>
                        <button class="btn btn-danger">D</button> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Home