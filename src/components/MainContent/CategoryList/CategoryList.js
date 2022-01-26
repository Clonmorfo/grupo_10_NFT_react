import React, { Component} from 'react';
import Category from './Category'



class ProductsPerCategory extends Component {
  constructor(){
    super();
    this.state= {
        page : 1,
        categorys : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3050/product/api/products')
      .then(res => res.json())
      .then(data =>{
       
        this.setState({
          categorys : data.categorys
        }
        )
        
       
      })
  }
  
  nextPage(){
    this.setState({
        page : this.state.page + 1
    })
  }

  previousPage(){
    this.setState({
        page : this.state.page - 1
    })
  }
  
  render(){
    return (
      <React.Fragment>
          <div className="col-lg-4 mb-4">						
                  <div className="card shadow mb-4">
                      <div className="card-header py-3">
                          <h5 className="m-0 font-weight-bold text-gray-800">Resumen de categorias</h5>
                      </div>
                      <div className="card-body">
                          <div className="row">
                           {
                             this.state.categorys.map(res => <Category name ={res.name} quantity={res.quantity}/>)
                             
                           }
                              
                          </div>
                            <div className='sig-ant-btn'>
                                <button onClick={()=>this.previousPage()} class="btn btn-danger"> producto anterior </button>
                                <p>{this.state.page}</p>
                                <button onClick={()=>this.nextPage()} class="btn btn-danger"> producto siguiente </button>
                            </div>
                      </div>
                  </div>
              </div>
      </React.Fragment>
    );
  }
}

export default ProductsPerCategory;
