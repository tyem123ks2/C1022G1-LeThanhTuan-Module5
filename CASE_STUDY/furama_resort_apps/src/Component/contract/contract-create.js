import {Component} from "react";

class ContractCreate extends Component {
    render() {
        return (
            <form>
                <div className="card-body">
                    <div className="row col-md-12 col-xl-12 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="facility"> Tên dịch vụ </label>
                            <select className="form-select" id="facility">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name_customer"> Tên khách hàng </label>
                            <select className="form-select" id="name_customer">
                                <option>IT</option>
                                <option>Blade Runner</option>
                                <option>Thor Ragnarok</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="startDate">Ngày bắt đầu</label>
                            <input type="date" className="form-control time-mask" id="startDate"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="endDate">Ngày kết thúc</label>
                            <input type="date" className="form-control time-mask" placeholder="input number people"
                                   id="endDate"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="deposit">Giá thuê:</label>
                            <input type="number" className="form-control block-mask" placeholder="giá" id="deposit"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="reset" className="btn btn-primary me-1 waves-effect waves-float waves-light">Submit
                        </button>
                        <button type="reset" className="btn btn-outline-secondary waves-effect">Reset</button>
                    </div>
                </div>
            </form>
        );
    }
}