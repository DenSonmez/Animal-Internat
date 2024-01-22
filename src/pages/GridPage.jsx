import React from 'react';


const GridPage = () => {
  return (
    <div>
      <GridExample1 />
      <GridExample2 />
      <GridExample3 />
      <GridExample4 />
    </div>
  );
};

const GridExample1 = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
     
    </div>
  );
};

const GridExample2 = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">A</div>
      <div className="grid-item">B</div>
      <div className="grid-item">C</div>
    </div>
  );
};


const GridExample3 = () => {
    return (
      <div className="grid-container2">
    
    <div className="grid-item1">Header</div>
  <div className="grid-item2">Menu</div>
  <div className="grid-item3">Main</div>  
  <div className="grid-item4">Right</div>
  <div className="grid-item5">Footer</div>
       
      </div>
    );
    }


    const GridExample4 = () => {
        return (
          <div className="grid-container3">
        
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
           
          </div>
        );
        }

export default GridPage;
