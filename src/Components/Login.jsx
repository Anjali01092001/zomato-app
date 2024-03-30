import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">+91<ExpandMoreIcon /></span>
                                <input type="text" className="form-control" placeholder="Phone number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="button">Send One Time Password</button>
                            </div>
                            <div style={{ display: 'flex' }} ><hr style={{ width: '14rem' }} /><p>or</p><hr style={{ width: '14rem' }} /></div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-light" type="button"><MailIcon style={{ color: '#F5160E' }} /> Continue with Email</button>
                                <button className="btn btn-light" type="button"><FcGoogle style={{fontSize:'1.5rem'}} /> Continue with Google</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            New to Zomato? <Link to="/signup" style={{color:'grey',textDecoration:'none'}}>Create account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
