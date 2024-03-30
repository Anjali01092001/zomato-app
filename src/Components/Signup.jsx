import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" for="defaultCheck1">
                                    I agree to Zomato's <span style={{ color: '#F5160E' }}>Terms of Service,Privacy and Policy and <br />content Policies</span>
                                </label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary" type="button">Create account</button>
                            </div>
                            <div style={{ display: 'flex' }} ><hr style={{ width: '14rem' }} /><p>or</p><hr style={{ width: '14rem' }} /></div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-light" type="button"><FcGoogle style={{ fontSize: '1.5rem' }} /> Continue with Google</button>
                            </div>
                        </div>
                        <div className="modal-footer" >
                            Already have an account? <Link to="/login" style={{ color: '#F5160E', textDecoration: 'none' }}>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
