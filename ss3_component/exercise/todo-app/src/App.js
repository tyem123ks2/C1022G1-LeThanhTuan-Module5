import React, {Component} from "react";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: ['Banker', 'Police', 'Shipper'],
            item: ''
        }
    }

    handleChange(value) {
        this.setState({
            item: value
        })
    }

    handleAddItem() {
        //Sao chép mảng cũ
        let newArr = [...this.state.list, this.state.item]
        //Thêm phần tử
        this.setState({
            item: '',
            list: newArr
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAddItem()}>ADD</button>
                <ul>
                    {
                        this.state.list.map((job, index) => (
                            <li key={index}> {job}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;
