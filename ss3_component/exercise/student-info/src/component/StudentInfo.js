function StudentInfo(props) {
    return (
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
            </tr>
            <tr>
                <td>1</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.address}</td>
            </tr>
        </table>
    );
}

export default StudentInfo;