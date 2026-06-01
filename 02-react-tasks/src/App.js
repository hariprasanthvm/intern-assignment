import React, { useState } from 'react';
import DragCounter from './DragCounter';
import FlexboxPlayground from './FlexboxPlayground';
import InstaPostClass from './InstaPostClass';
import InstaPostFunction from './InstaPostFunction';

export default function App() {
  const [activeTab, setActiveTab] = useState('drag');

  const navButtonStyle = (tabName) => ({
    padding: '10px 15px',
    background: activeTab === tabName ? '#007bff' : '#f0f0f0',
    color: activeTab === tabName ? 'white' : 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  });

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>React Assignment Modules</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button style={navButtonStyle('drag')} onClick={() => setActiveTab('drag')}>Task 2: Drag Counter</button>
          <button style={navButtonStyle('flex')} onClick={() => setActiveTab('flex')}>Task 3: Flex Playground</button>
          <button style={navButtonStyle('insta-class')} onClick={() => setActiveTab('insta-class')}>Task 4: Insta Class</button>
          <button style={navButtonStyle('insta-func')} onClick={() => setActiveTab('insta-func')}>Task 5: Insta Function</button>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeTab === 'drag' && <DragCounter />}
        {activeTab === 'flex' && <FlexboxPlayground />}
        {activeTab === 'insta-class' && <InstaPostClass />}
        {activeTab === 'insta-func' && <InstaPostFunction />}
      </div>
    </div>
  );
}
