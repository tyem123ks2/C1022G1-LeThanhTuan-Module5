import {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div id="container">
                <div className="navbar">
                    <img src="../../../image/pngwing.11com.png" className="logo"/>
                    <a style={{color: "#cccccc", textTransform: "uppercase", fontSize: 22}}>
                        Furama Resort
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Customer</a>
                            </li>
                            <li>
                                <a href="">Service</a>
                            </li>
                            <li>
                                <a href="">Contract</a>
                            </li>
                        </ul>
                    </nav>
                    <img src="../../../image/pngwing.com.png" className="menu-icon"/>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>FURAMA RESORT ĐÀ NẴNG</h1>
                        <p>Khu nghỉ dưỡng ẩm thực</p>
                        <p></p>
                        <p>Tọa lạc tại bãi biển Đà Nẵng</p>
                        <p></p>
                        <p>Một trong 6 bãi biển đẹp nhất thế giới</p>
                    </div>
                    <div className="col">
                        <div className="card card1">
                            <h5>Các loại phòng</h5>
                            <p>196 phòng được thiết kế theo phong cách Việt Nam</p>
                        </div>
                        <div className="card card2">
                            <h5>Trải nghiệm ẩm thực</h5>
                            <p>Các món ăn truyền thống Việt Nam thơm ngon!</p>
                        </div>
                        <div className="card card3">
                            <h5>Giải trí</h5>
                            <p>???</p>
                        </div>
                        <div className="card card4">
                            <h5>Sự kiện</h5>
                            <p>???</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
