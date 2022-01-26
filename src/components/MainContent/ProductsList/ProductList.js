import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Product from './Product'
import './ProductList.css'

class ProductList extends Component {

    constructor(){
        super()
        this.state = {
            page: 0,
            products : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3050/product/api/products')
            .then(res=> {
                return res.json()
            })
            .then(data =>{
                this.setState({products: data.products})
            })
    }

    nextPage(){
        this.setState({
            paginas : this.state.paginas + 1
        })
    }

    previousPage(){
        this.setState({
            paginas : this.state.paginas - 1
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="col-lg-4 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Resumen de productos</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                 {
                                    this.state.products.map(res => <Product 
                                                                        image={res.image_url}
                                                                        desc={res.description}/> 
                                                                        )
                                 }
                            </div>
                            <div className='sig-ant-btn'>
                                <button onClick={()=>this.previousPage()} class="btn btn-danger"> Pagina anterior </button>
                                <p>{this.state.paginas}</p>
                                <button onClick={()=>this.nextPage()} class="btn btn-danger"> Pagina siguiente </button>
                              </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;