import React from 'react';

import DetalleDB from './Cards/DetalleDB'
import LatestProduct from './LatestProduct/LatestProduct'
import ProductList from './ProductsList/ProductList'
import CategoryList from './CategoryList/CategoryList'
function ContentRowTop(){

    return(
        <React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
				<DetalleDB/>
				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className='row'>
				
					<ProductList/>
					<CategoryList/>
					<LatestProduct/>

				</div>

			</div>
        </React.Fragment>
    )

}
export default ContentRowTop;