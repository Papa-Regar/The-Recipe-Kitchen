import React from 'react'
import logo from '../components/chef.png'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#212519', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <div><img src={logo} style={{height: 80}}/></div> 
     <div style={{color: 'white'}}>
      <h1 style={{fontSize: 20, paddingTop: 10}}>The Recipe Kitchen</h1>
      <p style={{fontSize: 11}}>coded by Sufian Rahim</p>
      </div>
    </div>
  )
}

export default Footer
