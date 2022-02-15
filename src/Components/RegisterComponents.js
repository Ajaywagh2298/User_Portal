import "../CSS/RegisterComponents.css";
import {Link} from "react-router-dom";

const RegisterComponents = () => {
    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-7">
                            <div className={'d-flex align-items-center justify-content-center'}>
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <i className="far fa-regular fa-user"/>
                                </div>
                            </div>
                            <h3 className="title text-center mb-4 ">User Signup</h3>
                            <form className={'login-form'}>
                                <div className={"divider"}/>
                                <div className="form-floating mb-4">
                                    <input type="text" className="form-control rounded-0" id="floatingInput"/>
                                    <label htmlFor="floatingInput">Full Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control rounded-0" id="floatingInput"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="text" className="form-control rounded-0" id="floatingInput"/>
                                    <label htmlFor="floatingInput">User Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" className="form-control rounded-left" id="floatingPassword"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className={"divider"}/>
                                <div className="d-grid align-items-center justify-content-center">
                                    <button className="btn btn-login rounded submit p-1 px-3" type="submit">
                                        Get Started
                                    </button>
                                </div>
                            </form>
                            <div className={'text-center mb-4'}>
                                <div className="w-57">
                                    <label className="checkbox-wrap checkbox-primary">All Ready Register User : &nbsp;&nbsp;<Link to={'/login'}><i className="fas fa-external-link-alt"/></Link>
                                   </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterComponents;