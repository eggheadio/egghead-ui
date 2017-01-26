import React from 'react'
import Tooltip from '.'

const passStrengthValues = [10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100]

const getPasswordDescription = (pwd) => {
  if (0 < pwd && pwd < 50) {
    return 'Weak'
  }

  if (50 <= pwd && pwd < 90) {
    return 'Good'
  }

  return 'Strong'
}

const PassStrength = ({strength}) => {
  const width = `w-${strength}`
  const sWord = getPasswordDescription(strength)

  return (
    <div>
      <h5 className='f5 normal ma0 mb3'>
        Password Strength: <strong className='fw-5'>{sWord}</strong>
      </h5>  
      <div className='w-100 mb3 br-pill overflow-hidden bg-light-gray'>
        <div className={`bg-blue pa1 ${width}`}></div>
      </div>
    </div>
  )
}
PassStrength.propTypes = {
  strength: React.PropTypes.oneOf(passStrengthValues).required
}

const PasswordTooltip = ({strength}) => {
    const passMsg = (
      <div className='f6 lh-copy'>
        Use at least 8 characters. Don’t use a password from another site, or something too obvious
        like your pet’s name. <a href="#" className='orange mh1'>Why?</a>
      </div>
    )

  return (
    <Tooltip strength={strength}>
      <PassStrength strength={strength} />
      {passMsg}
    </Tooltip>
  )
}
PasswordTooltip.propTypes = {
  strength: React.PropTypes.number.isRequired
}

export default PasswordTooltip
