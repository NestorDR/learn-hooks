// rfcp→ o rsfp→
import React from 'react'
import * as PropTypes from 'prop-types'

const Family = ({members}) => {
  return (
    <div>
      <h4>Mi Familia</h4>
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {members.map((member, index) => (
          <li key={index}><i>{member.name}</i> - {member.age} años</li>
        ))}
      </ul>
    </div>
  )
};

Family.propTypes = {
  members: PropTypes.array.isRequired,
};

export default Family;

