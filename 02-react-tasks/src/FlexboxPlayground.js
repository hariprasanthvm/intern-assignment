import React, { useState } from 'react';

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState('row');
  const [align, setAlign] = useState('stretch');
  const [justify, setJustify] = useState('flex-start');

  const containerStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    background: '#e0e0e0',
    height: '300px',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '20px',
    transition: 'all 0.3s ease'
  };

  const boxStyle = {
    background: '#ff5722',
    color: 'white',
    padding: '20px',
    margin: '5px',
    borderRadius: '4px',
    fontWeight: 'bold',
    minWidth: '40px',
    minHeight: '40px',
    textAlign: 'center'
  };

  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '20px auto' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>Flex Direction</label>
          <select value={direction} onChange={(e) => setDirection(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>Align Items</label>
          <select value={align} onChange={(e) => setAlign(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>Justify Content</label>
          <select value={justify} onChange={(e) => setJustify(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
        <div style={boxStyle}>4</div>
      </div>
    </div>
  );
}
