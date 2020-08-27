import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super();
        this.baseUrl = "http://localhost:3000";
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch(`${this.baseUrl}/products`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data.products
                });
            });
    }

    render() {
        return (
            <div className="row">
                {this.state.products.map((product, index) => {
                    return <div className="col-sm-6 col-md-4" key={index}>
                        <div className="thumbnail">
                            <img src={this.baseUrl + product.productImage} alt={product.name} />
                            <div className="caption">
                                <h3>{product.name}</h3>
                                <p>...</p>
                                <p>
                                    <a href="#" className="btn btn-primary" role="button">Chi tiết</a>
                                    <a href="#" className="btn btn-default" role="button">Mua</a>
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}