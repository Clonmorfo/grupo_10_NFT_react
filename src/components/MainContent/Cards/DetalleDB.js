import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Desc from './Desc'

let totalDeProductos = {
    title: "Total de productos",
    quantity: 29
}
let totalDeUsuarios = {
    title: "Total de suarios",
    quantity: 15
}
let totalDeCategorias = {
    title: "Total de Categorias",
    quantity: 10
}

let total =[totalDeProductos,totalDeUsuarios,totalDeCategorias]

class DetalleDB extends Component {

    constructor(){
        super()
        this.state = [
            {
                title: "Total de productos",
                quantity: 0
            },
            {
                title: "Total de usuarios",
                quantity: 0
            },
            {
                title: "Total de Categorias",
                quantity: 0
            }
        ]
    }
    /*componentDidMount(){
        this.state.map(cards =>{
            if (cards.title =="Total de productos" ){
                fetch ('http://localhost:3050/product/api/products')
                    .then(res => res.json())
                    .then(data => {
                        this.setState({
                           quantity : data.products.length
                        })
                    })
            }
        })
    }*/
    
                       

    


    render (){
        return (
          <React.Fragment>
                {/*<!-- Content Row Movies-->*/}
              <div className="row">
                  {/*<!-- Movies in Data Base -->*/}
                  
                  {
                    this.state.map(res => <Desc 
                                            title = {res.title}
                                            quant ={res.quantity}/>)
                }
                  
              </div>
              {/*<!-- End movies in Data Base -->*/}
          </React.Fragment>
        )
    }
}

export default DetalleDB;