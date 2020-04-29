// rfcp→ o rsfp→
import React from 'react'
import * as PropTypes from 'prop-types'

const Loading = props => {
  const {data} = props;
  return (
    <div>
      <h4>{data.title}</h4>
      <small><i>Tiempo estimado {data.timeOut} segundos.</i></small>
    </div>
    
  )
};

Loading.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Loading;
