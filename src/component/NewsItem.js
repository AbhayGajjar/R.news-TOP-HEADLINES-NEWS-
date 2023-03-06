import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title,decription,imageurl,newsurl} = this.props
    return (
      <div className="container my-2">

      <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={!imageurl?"https://image.cnbcfm.com/api/v1/image/107202995-16778613422023-03-03t163145z_2142582926_rc2emz97lkh3_rtrmadp_0_usa-stocks.jpeg?v=1677882547&w=1920&":imageurl} alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{decription}</p>
            <a href={newsurl} rel="noopener" className='btn btn-dark'>Reade More</a>
          </div>
          </div>
      </div>
          )
  }
}

      export default NewsItem