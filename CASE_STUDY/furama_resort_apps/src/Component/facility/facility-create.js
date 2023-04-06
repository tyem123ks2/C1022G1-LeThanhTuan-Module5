import React, {Component} from "react";

class FacilityCreate extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: "center"}}>THÊM MỚI DỊCH VỤ</h2>
                <div className="d-flex justify-content-center mt-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Tên dịch vụ{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dientich" className="form-label">
                                Diện tích sử dụng{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="dientich"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="chiphi" className="form-label">
                                Chi phí thuê{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="chiphi"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maxPeople" className="form-label">
                                Số lượng người tối đa{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="maxPeople"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="kieuthue" className="form-label">
                                Kiểu thuê{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="kieuthue"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeService" className="form-label">
                                Dịch vụ miễn phí đi kèm:{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="typeService"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </>

        );
    }
}

export default FacilityCreate;