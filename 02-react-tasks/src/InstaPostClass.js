import React, { Component } from 'react';

export default class InstaPostClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeCount: 124
    };
  }

  toggleLike = () => {
    this.setState((prevState) => ({
      liked: !prevState.liked,
      likeCount: prevState.liked ? prevState.likeCount - 1 : prevState.likeCount + 1
    }));
  };

  render() {
    return (
      <div style={{ border: '1px solid #dbdbdb', borderRadius: '8px', background: 'white', maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ccc', marginRight: '10px' }}></div>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>class_developer</span>
        </div>
        
        <div style={{ background: '#fafafa', height: '300px', display: 'flex', alignItems: 'center', justifyContext: 'center', color: '#999', fontSize: '14px', width: '100%', justifyContent: 'center' }}>
          [ Post Image Placeholder ]
        </div>

        <div style={{ padding: '12px' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '8px' }}>
            <span onClick={this.toggleLike} style={{ cursor: 'pointer', fontSize: '20px', color: this.state.liked ? 'red' : 'black' }}>
              {this.state.liked ? '❤️' : '🤍'}
            </span>
            <span style={{ fontSize: '20px', cursor: 'pointer' }}>💬</span>
            <span style={{ fontSize: '20px', cursor: 'pointer' }}>🚀</span>
          </div>

          <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
            {this.state.likeCount} likes
          </div>

          <div style={{ fontSize: '14px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '8px' }}>class_developer</span>
            Building components with old school class architecture!
          </div>
        </div>
      </div>
    );
  }
}
