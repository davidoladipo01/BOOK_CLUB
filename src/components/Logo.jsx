import React from 'react'

function Logo() {
  return (
    <div>
      <svg className="ar-adinkra-accent" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="none" stroke="#5A3E2B" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="18" fill="none" stroke="#5A3E2B" strokeWidth="1"/>
        <circle cx="30" cy="30" r="8"  fill="none" stroke="#D9A441" strokeWidth="1.5"/>
        <line x1="30" y1="2"  x2="30" y2="58" stroke="#5A3E2B" strokeWidth="0.8"/>
        <line x1="2"  y1="30" x2="58" y2="30" stroke="#5A3E2B" strokeWidth="0.8"/>
      </svg>
 
      {/* Brand */}
      <div className="ar-auth-brand">
        <div className="ar-auth-brand-mark">
          <svg viewBox="0 0 16 16" fill="none">
            <rect x="1" y="2" width="9" height="12" rx="1" fill="white" opacity="0.9"/>
            <rect x="4" y="2" width="9" height="12" rx="1" fill="white" opacity="0.55"/>
          </svg>
        </div>
        <span className="ar-auth-brand-name">Afri<span>Read</span>Co</span>
      </div>
    </div>
  )
}

export default Logo
