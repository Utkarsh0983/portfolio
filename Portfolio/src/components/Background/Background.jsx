import React from 'react'

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-x-hidden">

      
      {/* Fixed background layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] h-[500px] w-[500px] rounded-full 
          bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />

        <div className="absolute top-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full 
          bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Background
