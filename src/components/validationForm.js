import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { submitForm } from "../features/valFormSlice";
import "./main.css"

function ValidationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [sem1, setSem1] = useState("");
    const [sem2, setSem2] = useState("");
    const [sem3, setSem3] = useState("");
    const [sem4, setSem4] = useState("");
    const [sem5, setSem5] = useState("");
    const [sem6, setSem6] = useState("");
    const [sem7, setSem7] = useState("");
    const [sem8, setSem8] = useState("");

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      dispatch(submitForm({
        name : name,
        email : email,
        contact : contact,
        sem1 : sem1,
        sem2 : sem2,
        sem3 : sem3,
        sem4 : sem4,
        sem5 : sem5,
        sem6 : sem6,
        sem7 : sem7,
        sem8 : sem8,
        formSubmitted: true
      }));
    }

  return (
    <div className='full-container-frm'>
            <div className='form-container'>
                <h1 className='frm-container-header'>Student's Details</h1>
                <div className='form-div'>
                    <form className='form-class' onSubmit={(e) => handleFormSubmit(e)}>

                        <div className="input-align">
                            <p className='left-key'>Name: </p><input  className='right-key' type='text' name='Name' pattern="[A-Za-z A-Za-z]{1,32}" required value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div id='gender'>
                            <p className='left-key'>Gender:</p>
                            <div className="bullet">
                                <input type='radio' name='gender' value='male' /> Male
                                <input type='radio' name='gender' value='female' /> Female
                                <input type='radio' name='gender' value='other' /> Other
                            </div>
                        </div>

                        <div className="input-align">
                            <p className='left-key'>Email: </p><input  className='right-key' type='email' name='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        <div className="input-align">
                            <p className='left-key'>Contact: </p><input  className='right-key' type='tel' name='Contact' maxLength='9999999999' required value={contact} onChange={(e) => setContact(e.target.value)}/>
                        </div>
                        
                        <div className="input-align">
                            <p className='left-key'>Date of Birth: </p><input id='dob' className='right-key' type='date' name='Date of Birth' min="1963-01-01" max="2004-12-31" />
                        </div>
                        
                        <div className="input-align">
                            <p className='left-key'>Graduation: </p><input  className='right-key' type='text' name='Qualification' />
                        </div>

                        <h3 className='frm-mid-header'>Please enter your Marks</h3>

                        <div className='marks-sheet'>
                            <div id='sem-a'>
                                <p className='left-key'>Semester 1:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem1} onChange={(e) => setSem1(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 2:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem2} onChange={(e) => setSem2(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 3:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem3} onChange={(e) => setSem3(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 4:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem4} onChange={(e) => setSem4(e.target.value)}/>
                                </p>
                            </div>

                            <div id='sem-b'>
                                <p className='left-key'>Semester 5:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem5} onChange={(e) => setSem5(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 6:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem6} onChange={(e) => setSem6(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 7:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem7} onChange={(e) => setSem7(e.target.value)}/>
                                </p>
                                <p className='left-key'>Semester 8:
                                    <input className='input-marks' type='number' name='Marks' min='0' max='100' required value={sem8} onChange={(e) => setSem8(e.target.value)}/>
                                </p>
                            </div>
                        </div>

                        <div className='check-box-2'>
                            <input id='terms-check' type='checkbox' name='terms and conditions' value='accept' required /><b>Please Confirm.</b>
                        </div>

                        <button className='sbmt-btn' type='submit' value='Submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default ValidationForm