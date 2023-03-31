import {Component} from 'react';

class facilityEdit extends Component {
    render() {
        return (
            <>
            <form className="w-50 border border-2 border-success p-3 rounded"></form>
            <div className="form-group">
                <label htmlFor="name" style="font-weight: bold">Tên:</label>
                <div className="input-group">
                    <input type="text" id="name" className="form-control" placeholder="Nhập tên"
                           name="name">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="area" style="font-weight: bold">Diện tích:</label>
                <div className="input-group">
                    <input type="text" id="area" className="form-control" placeholder="Nhập diện tích"
                           name="area">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="cost" style="font-weight: bold">Giá tiền:</label>
                <div className="input-group">
                    <input type="text" id="cost" className="form-control" placeholder="Nhập giá tiền"
                           name="cost">
                        <span className="input-group-text"></span>
                </div>
            </div>


            <div className="mt-3 form-group">
                <label htmlFor="maxPeople" style="font-weight: bold">Số người tối đa:</label>
                <div className="input-group">
                    <input type="text" id="maxPeople" className="form-control"
                           placeholder="Nhập số người tối đa"
                           name="maxPeople">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="standardRoom" style="font-weight: bold">Tiêu chuẩn phòng:</label>
                <div className="input-group">
                    <input type="text" id="standardRoom" className="form-control"
                           placeholder="Tiêu chuẩn phòng"
                           name="standardRoom">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="descriptionOtherConvenience" style="font-weight: bold">Mô tả:</label>
                <div className="input-group">
                    <input type="text" id="descriptionOtherConvenience" className="form-control"
                           placeholder="Nhập mô tả"
                           name="descriptionOtherConvenience">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="poolArea" style="font-weight: bold">Diện tích hồ bơi:</label>
                <div className="input-group">
                    <input type="text" id="poolArea" className="form-control"
                           placeholder="Nhập diện tích hồ bơi"
                           name="poolArea">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="numberOfFloors" style="font-weight: bold">Số tầng:</label>
                <div className="input-group">
                    <input type="text" id="numberOfFloors" className="form-control"
                           placeholder="Nhập số tầng"
                           name="numberOfFloors">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="facilityFree" style="font-weight: bold">Dịch vụ miễn phí:</label>
                <div className="input-group">
                    <input type="text" id="facilityFree" className="form-control"
                           placeholder="Nhập dịch vụ miễn phí"
                           name="facilityFree">
                        <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="facilityType" style="font-weight: bold">Loại dịch vụ:</label>
                <div className="input-group">
                    <select id="facilityType" className="form-control" name="facilityType">
                        <option></option>
                    </select>
                    <span className="input-group-text"></span>
                </div>
            </div>

            <div className="mt-3 form-group">
                <label htmlFor="rentType" style="font-weight: bold">Kiểu thuê:</label>
                <div className="input-group">
                    <select id="rentType" className="form-control" name="rentType">
                        <option></option>
                    </select>
                    <span className="input-group-text"></span>
                </div>
            </div>


            <div className="mt-3 text-center">
                <button
                    className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                    -- Save --
                </button>
            </div>
            </form>
        </>
    );
    }}

export default FacilityEdit
