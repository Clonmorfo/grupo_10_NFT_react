import React from 'react';
import Header from './Header/Header';
import ContentRowTop from './MainContent/ContentRowTop';
import Footer from './Footer/Footer';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
              {/*<!-- Main Content -->*/}
              <div id="content">
                  <Header />
                  <ContentRowTop />
                  <Footer />
              </div>
          </div>    
        </div>
    </React.Fragment>
  );
}

export default App;
