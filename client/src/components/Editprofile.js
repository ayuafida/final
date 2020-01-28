import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {ButtonContainer} from './Button';

class Editprofile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">edit profile</h1>
            <div className="form-group">
              <label htmlFor="name">Nama Depan</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
               
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nama Belakang</label>
              
              <input
              type="text"
              className="form-control"
              name="last_name">
                
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
               
              />
            </div>
           
            <ButtonContainer
              type="submit"
              className="mb-3"
            >
              Update
            </ButtonContainer>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default Editprofile
