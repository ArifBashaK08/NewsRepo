import React, { Component } from 'react'
import Loading from '../assets/Loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="m-auto" style={{width: '35rem'}}>
        <img className='rounded-circle' src={Loading} alt="Loading..." style={{width: '100%'}} />
      </div>
    )
  }
}

export default Spinner