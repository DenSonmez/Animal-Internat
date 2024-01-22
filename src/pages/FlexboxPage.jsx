import React from 'react';

const FlexboxPage = () => {
  return (
    <div>
      <FlexboxExample1 />
      <FlexboxExample2 />
      <FlexboxExample3 />
    </div>
  );
};

const FlexboxExample1 = () => {
  return (
    <div className="flex-container horizontal ">
      
      <div className="item1">Blå</div>
      <div className="item1">Rød</div>
      <div className="item1">Gul</div>
      <div className="item1">Sort</div>
      <div className="item1">Lilla</div>

    </div>
  );
};

const FlexboxExample2 = () => {
  return (
    <div className="flex-container2 vertical ">
        <div className="item2">A</div>
      <div className="item2">B</div>
      <div className="item2">C</div>
      <div className="item2">D</div>
    
    </div>
  );
};


const FlexboxExample3 = () => {
  return (
<div className="flex-container3" style={{ height: '300px' }}>
      <div className="item3">1</div>
      <div className="item3">2</div>
      <div className="item3" >3</div>
      <div className="item3">4</div>
      <div className="item3">5</div>
      <div className="item3">6</div>
      <div className="item3">7</div>
      <div className="item3">8</div>
      <div className="item3">9</div>
     
    </div>
  );
}

export default FlexboxPage;