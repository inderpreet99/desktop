import React from 'react'

import { IconButton } from '@material-ui/core'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

/**
 * Renders an individual icon button, setting the state with the name on hover and click.
 * @param name The human-readable name of the icon.
 * @param icon The font-awesome icon.
 * @param onClick Optional click handler.
 * @param onMouseEnter MouseEnter click handler.
 * @param onMouseLeave MouseLeave click handler.
 * @param className Optional classname.
 */
const ToolbarButton = ( { name, icon, onClick, onMouseEnter, onMouseLeave, className = '', ...rest } ) => (
  <IconButton
    key={name}
    className={className}
    tabIndex={-1}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} {...rest} />
  </IconButton>
)

export default ToolbarButton
