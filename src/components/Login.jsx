import React from 'react'
import "../styles/Login.css"
import { ConnectWallet } from "@thirdweb-dev/react";


function Login() {
  return (
    <div>
      <h1>__________</h1>
      <h1>__________</h1>
      <div className="connect">
          <ConnectWallet dropdownPosition={{
            align: 'center',
            side: 'bottom'
          }} />
        </div>
    </div>
  )
}

export default Login