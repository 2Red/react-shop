import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">{this.props.appName}</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nhập sản phẩm cần tìm" />
                            </div>
                            <button type="submit" className="btn btn-default">Tìm kiếm</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Đăng kí</a></li>
                            <li><a href="#">Đăng nhập</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}