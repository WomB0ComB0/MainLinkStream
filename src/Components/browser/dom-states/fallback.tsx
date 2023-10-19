import React, { FC } from 'react'
const FallBack:  FC = () => {
    return (
      <React.Component>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-gray-800">You are offline</h1>
          <p className="text-xl text-gray-600">Please check your internet connection</p>
        </div>
      </React.Component>
    )
}
export default FallBack;