import React from 'react'
import "./GIT.css"


const GIT = (props) => {
    return (
        <div className='GIT-container'>
            <div className='social-container'>

            </div>
            <div className='form-container '>
                <div className='text-content'>
                    <h1 className='GIT-title'>GET IN TOUCH</h1>
                    <p className='GIT-p'>Feel free to send us an Email</p>
                    <form className='GIT-form'>
                        <div class="form-group">
                            <input type="text" id="name" name="name" className='GIT-input' placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="Subject" className='GIT-input' name="Subject" placeholder="Subject" />
                        </div>
                        <div class="form-group">
                            <textarea name="Text1" cols="40" className='GIT-input' rows="8" placeholder='Email Content ...'></textarea>
                        </div>

                        <button type="submit" class="GIT-btn">Send</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default GIT;