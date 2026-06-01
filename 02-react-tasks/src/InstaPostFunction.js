import React, { useState } from 'react';

export default function InstaPostFunction() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(452);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div style={{ border: '1px solid #dbdbdb', borderRadius: '8px', background: 'white', maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#4CAF50', marginRight: '10px' }}></div>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>functional_coder</span>
      </div>
      
      <div style={{ background: '#f0f0f0', height: '300px', display: 'flex', alignItems: 'center', color: '#666', fontSize: '14px', width: '100%', justifyContent: 'center' }}>
        [ Post Image Placeholder ]
      </div>

      <div style={{ padding: '12px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '8px' }}>
          <span onClick={handleLike} style={{ cursor: 'pointer', fontSize: '20px', color: liked ? 'red' : 'black' }}>
            {liked ? '❤️' : '🤍'}
          </span>
          <span style={{ fontSize: '20px', cursor: 'pointer' }}>💬</span>
          <span style={{ fontSize: '20px', cursor: 'pointer' }}>🚀</span>
        </div>

        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
          {likeCount} likes
        </div>

        <div style={{ fontSize: '14px' }}>
          <span style={{ fontWeight: 'bold', marginRight: '8px' }}>functional_coder</span>
          Clean hooks make UI management so much easier.
        </div>
      </div>
    </div>
  );
}
