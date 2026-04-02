import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let{title,description,imageUrl,newUrl}=this.props;
    return (
      <>
        <div className='container my-3'>            
          <div className="card" style={{width: '18rem'}}>
            {imageUrl ? <img src={imageUrl} className="card-img-top" alt={title}></img> : <div style={{width: '100%', height: '180px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No Image</div>}
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              {newUrl && <a href={newUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read More</a>}
            </div>
          </div>
        </div>
        
      </>
      
    )
  }
}

