import * as customerService from "../../Service/customerService"
import {toast} from 'react-toastify'
import {useNavigate} from "react-router";

function CustomerModalDelete(props) {


    const handleDelete = async (id) => {
        await customerService.remove(id)
        toast("Xóa thành công");
        props.getCustomerList();
    };
    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Xóa Khách Hàng
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Bạn có chắc chắn muốn xóa khách hàng <span
                            className="text-danger fw-bold">{props.name}</span> không?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button onClick={() => handleDelete(props.id)} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerModalDelete;