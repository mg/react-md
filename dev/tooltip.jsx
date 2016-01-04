import React from 'react'
import { Icon, Tooltip } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class TooltipPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Tooltips</h3>
        <LeftPackedRow>
          <Tooltip tooltip='Tooltip'>
            <Icon>print</Icon>
          </Tooltip>
          <Space/>
          <Tooltip tooltip='Tooltip' align='top'>
            <Icon>print</Icon>
          </Tooltip>
          <Space/>
          <Tooltip tooltip='Tooltip' align='left'>
            <Icon>print</Icon>
          </Tooltip>
          <Space/>
          <Tooltip tooltip='Tooltip' align='right' margin={16}>
            <Icon>print</Icon>
          </Tooltip>
        </LeftPackedRow>

      </div>
    )
  }
}