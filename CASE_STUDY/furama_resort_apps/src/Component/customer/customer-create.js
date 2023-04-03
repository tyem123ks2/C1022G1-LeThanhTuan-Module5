import {Component} from "react"

class CustomerCreate extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center mt-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Họ và tên: </label>
                        <input type="text" className="form-control" id="name" aria-describedby="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">Ngày sinh </label>
                        <input type="date" className="form-control" id="dateOfBirth" aria-describedby="dateOfBirth"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Giới tính</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="gender"/>
                            <label className="form-check-label" htmlFor="gender">
                                Nam
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="gender1"
                                   checked>
                                <label className="form-check-label" htmlFor="gender1">
                                    Nữ
                                </label>
                            </input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idCard" className="form-label">Số CMND</label>
                        <input type="text" className="form-control" id="idCard"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Số điện thoại:</label>
                        <input type="text" className="form-control" id="phoneNumber"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Địa chỉ:</label>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                    <div className="mb-3">
                        <label className="fs-5" htmlFor="">Loại khách: </label>
                        <select className="form-select" aria-label="Default select example">
                            <option value="">Diamond</option>
                            <option value="">Platinium</option>
                            <option value="">Gold</option>
                            <option value="">Silver</option>
                            <option value="">Member</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default CustomerCreate;