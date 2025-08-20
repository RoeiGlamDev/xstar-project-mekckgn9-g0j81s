import React from 'react';

interface ThreeTypesProps {
  type1: string;
  type2: string;
  type3: string;
}

const ThreeTypes: React.FC<ThreeTypesProps> = ({ type1, type2, type3 }) => {
  return (
    <div className="three-types-container" style={{ backgroundColor: '#000', color: '#FFC0CB' }}>
      <div className="type" style={{ border: '1px solid #FFC0CB', padding: '20px', margin: '10px' }}>
        <h2>{type1}</h2>
      </div>
      <div className="type" style={{ border: '1px solid #FFC0CB', padding: '20px', margin: '10px' }}>
        <h2>{type2}</h2>
      </div>
      <div className="type" style={{ border: '1px solid #FFC0CB', padding: '20px', margin: '10px' }}>
        <h2>{type3}</h2>
      </div>
    </div>
  );
};

export default ThreeTypes;