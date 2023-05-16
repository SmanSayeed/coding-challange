import React from 'react'

type Props = {}

const ProfileButton = (props: Props) => {
  return (
    <>
        <div
      className="bordered-btn"
    >
      <p className="hidden lg:block neon-green-text ">Login with github</p>
      <div className="mobile-nav-icon text-2xl text-green-500 p-2 rounded-lg neon-green-text ">
       
      </div>
    </div>
    </>
  )
}

export default ProfileButton