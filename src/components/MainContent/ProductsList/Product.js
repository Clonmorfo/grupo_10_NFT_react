import React from 'react';
function Product(props) {
  return (
    <React.Fragment>
        <div className="box-conteiner" >
          <div className="box">
              <div className="image" >
                  <a href="http://localhost:3050/product/30">
                      <img src={props.image} alt="emojicon" />
                  </a>
              </div>
              <div className="info">
                  <h3 className="title">{}</h3>
                  <div className="subInfo">
                      <div className="price">{}
                          <span>$600</span>
                      </div>
                      <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      	
    </React.Fragment>
  );
}

export default Product;
