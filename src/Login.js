import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h1 className="card-title text-center">
                            <div className="card-text">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email Address</label>
                                        <input type="email" className='form-control form-control-sm' id='exampleInputEmail1' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>

                                        <input type="password" className='form-control form-control-sm' id='exampleInputPassword1' />
                                    </div>
                                    <button type='submit' className="btn btn-primary btn-block">
                                        Sign-In
                                    </button>
                                    <div className="signup">
                                        Don't have an account? <a href='#'>Create an Account</a>
                                    </div>
                                </form>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login