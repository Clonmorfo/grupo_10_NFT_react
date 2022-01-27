//corregir el css con quique para que muestre bien las tarjetas
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
        fetch('http://localhost:3050/product/api/products/page/'+ this.state.page  )
            .then(res=> {
                return res.json()
            })
            .then(data =>{
                this.setState({products: data.products})
            })
            .catch(err =>{
                console.log(err)
            })
    }

   

    nextPage(){
        fetch('http://localhost:3050/product/api/products/page/'+ (this.state.page +1)  )
            .then(res=> {
                return res.json()
            })
            .then(data =>{
                if (data.products[0] !== undefined){

                    this.setState({
                        page : this.state.page +1,
                        products: data.products})
                }
            })
    }

    previousPage(){
        fetch('http://localhost:3050/product/api/products/page/'+ (this.state.page - 1)  )
            .then(res=> {
                return res.json()
            })
            .then(data =>{
                if (data.products[0] === undefined){
                    this.setState({
                        page: 0
                    })
                }
                this.setState({
                    page : this.state.page -1,
                    products: data.products})
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
                                <p>{this.state.page +1 }</p>
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