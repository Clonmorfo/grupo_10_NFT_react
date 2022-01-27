/*revisar porq no se muestra bien la descripcion*/
import React, {Component} from 'react';
import "./LatestProduct.css"

class LatestProduct extends Component {
    constructor(){
        super();
        this.state= {
            page : 0,
            productImage : "",
            desc: ""

        }
    }

    componentDidMount(){
        fetch("http://localhost:3050/product/api/products/page/" + (this.state.page ))
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({  
                    productImage : data.products[0].image_url,
                    desc :data.products[0].description
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    nextPage(){
        
        fetch("http://localhost:3050/product/api/products/page/" +(this.state.page +1))
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(data.products[0] !== undefined){
                    this.setState({
                        page : this.state.page +1,
                        productImage : data.products[0].image_url,
                        desc:data.products[0].description
                    })
                }
            })
            .catch(err =>{
                console.log(err)
            })
        
    }

    previousPage(){
        fetch("http://localhost:3050/product/api/products/page/" +(this.state.page -1 ) )
        .then(res => {
            return res.json()
        })
        .then(data => {
            if(data.products[0] !== undefined){
                this.setState({
                    page : this.state.page -1,
                    productImage : data.products[0].image_url,
                    desc:data.products[0].description
                })
            }
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
                            <p>{this.state.desc}</p>
                            <div className='sig-ant-btn'>

                                <button onClick={()=>this.previousPage()} class="btn btn-danger"> producto siguiente </button>
                                <p>{this.state.page +1}</p>
                                <button onClick={()=>this.nextPage()} class="btn btn-danger"> producto anterior</button>
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