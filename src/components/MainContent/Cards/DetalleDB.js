//revisar lo comentado linea 41 con uri

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Desc from './Desc'

let totalDeProductos = {
    title: "Total de productos",
    quantity: 0
}
let totalDeUsuarios = {
    title: "Total de usuarios",
    quantity: 0
}
let totalDeCategorias = {
    title: "Total de Categorias",
    quantity: 0
}

let total =[totalDeProductos,totalDeUsuarios,totalDeCategorias]

class DetalleDB extends Component {

    constructor(){
        super()
        this.state = {
            categories: [],
            products: [],
            users: [],

        }
    }
    componentDidMount(){
    
        fetch ('http://localhost:3050/product/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products : data.products,
                    categories: data.categorys
                })
            })
        fetch ('http://localhost:3050/users/api/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users : data.users
                })
            })
            
    }
    
    
                       

    


    render (){
        total[0].quantity =this.state.products.length
        total[1].quantity = this.state.users.length
        total[2].quantity =this.state.categories.length
        return (
          <React.Fragment>
                {/*<!-- Content Row Movies-->*/}
              <div className="row">
                  {/*<!-- Movies in Data Base -->*/}
                  
                  {
                    total.map(res => <Desc 
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