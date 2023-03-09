import * as React from 'react'

function ControlPanel(props) {
  // const { year } = props

  return (
    <div className="control-panel">
      <h3>Views</h3>
      <p>Please select the view of road</p>
      <h4>Infractions</h4>
      <h4>Speed Limits</h4>
      <h4>Traffic and Journey</h4>
    </div>
  )
}

export default React.memo(ControlPanel)
