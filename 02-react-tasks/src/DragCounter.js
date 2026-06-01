import React, { useState } from 'react';

export default function DragCounter() {
  const [count, setCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const threshold = 50; // pixels needed to change count

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    
    // Visually limit the movement of the button inside its track
    const visualMove = Math.max(-60, Math.min(deltaX, 60));
    setOffsetX(visualMove);

    if (deltaX > threshold) {
      setCount(prev => prev + 1);
      setStartX(currentX); // Reset baseline
    } else if (deltaX < -threshold) {
      setCount(prev => prev - 1);
      setStartX(currentX); // Reset baseline
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    setOffsetX(0); // Snap back to center
    e.target.releasePointerCapture(e.pointerId);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '280px', margin: '20px auto' }}>
      <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>{count}</div>
      <div style={{ width: '180px', height: '50px', background: '#eee', borderRadius: '25px', position: 'relative', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            width: '50px',
            height: '50px',
            background: '#4CAF50',
            borderRadius: '50%',
            position: 'absolute',
            transform: `translateX(${offsetX}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s',
            cursor: 'grab',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            userSelect: 'none'
          }}
        >
          +
        </div>
      </div>
      <p style={{ color: '#777', fontSize: '14px', marginTop: '15px' }}>Drag knob left or right</p>
    </div>
  );
}
