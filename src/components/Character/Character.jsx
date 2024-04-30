import PropTypes from 'prop-types'
import './Character.css'
import { useState } from 'react'
const Character = ({ characterKey, name, image }) => {
  const [turned, setTurned] = useState(false)

  const toggleTurned = () => {
    setTurned(!turned)
  }
  return (
    <li key={characterKey}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        onClick={toggleTurned}
        className={turned ? 'turned' : ''}
      />
    </li>
  )
}

Character.propTypes = {
  characterKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Character
