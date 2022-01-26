
import React, {Component} from 'react';
import "./LatestProduct.css"

class LatestProduct extends Component {
    constructor(){
        super();
        this.state= {
            page : 1,
            productImage : ""
        }
    }

    componentDidMount(){
        fetch("http://localhost:3050/product/api/products")
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({  
                    productImage : data.products[this.state.page -1].image_url
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    nextPage(){
        this.setState({
            page : this.state.page + 1
        })
        fetch("http://localhost:3050/product/api/products")
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(this.state.page > data.products.length){
                    this.setState({
                        page : 1
                    })
                }
                
                this.setState({
                    productImage : data.products[this.state.page -1].image_url
                })

            })
            .catch(err =>{
                console.log(err)
            })
        
    }

    previousPage(){
        this.setState({
            page : this.state.page - 1
        })
        fetch("http://localhost:3050/product/api/products")
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(this.state.page < 1){
                    this.setState({
                        page : data.products.length 
                    })
                }
                this.setState({
                    
                    productImage : data.products[this.state.page -1].image_url
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    render(){
        let contenido ;
        if (this.state.productImage == ""){
            contenido = <img src='https://ak.picdn.net/shutterstock/videos/1057217728/thumb/1.jpg?ip=x480'/>
        }else{
            contenido = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.productImage} alt="image"/>
        }

        return (
            <React.Fragment>
                {/*<!-- Last Movie in DB -->*/}
                <div className="col-lg-4 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                {contenido}
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                            <div className='sig-ant-btn'>

                                <button onClick={()=>this.previousPage()} class="btn btn-danger"> producto anterior </button>
                                <p>{this.state.page}</p>
                                <button onClick={()=>this.nextPage()} class="btn btn-danger"> producto siguiente </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End content row last movie in Data Base -->*/}
              
        </React.Fragment>
      );
    }
    
}

export default LatestProduct;