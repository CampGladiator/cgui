import React, { memo } from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Tooltip.scss'

const TooltipTrigger = memo(
  ({ as: componentType, className, children, ...props }) => {
    const ElementType = componentType || 'span'
    return (
      <ElementType
        className={mods('cg-tooltip__trigger', {}, className)}
        {...props}
      >
        {children}
      </ElementType>
    )
  },
)

TooltipTrigger.displayName = 'Tooltip.Trigger'

TooltipTrigger.defaultProps = {
  as: 'span',
}

TooltipTrigger.propTypes = {
  /**
   * @property {elementType} as An element type to render as (string or function)
   */
  as: PropTypes.elementType,
  /**
   * @property {string} className Additional Classes
   */
  className: PropTypes.string,
  /**
   * @property {node} children Content that will get render
   */
  children: PropTypes.node,
}

const TooltipContent = memo(
  ({ as: componentType, className, children, ...props }) => {
    const ElementType = componentType || 'legend'
    return (
      <ElementType
        className={mods('cg-tooltip__content', {}, className)}
        {...props}
      >
        {children}
      </ElementType>
    )
  },
)

TooltipContent.displayName = 'Tooltip.Content'

TooltipContent.defaultProps = {
  as: 'legend',
}

TooltipContent.propTypes = {
  /**
   * @property {elementType} as An element type to render as (string or function)
   */
  as: PropTypes.elementType,
  /**
   * @property {string} className Additional Classes
   */
  className: PropTypes.string,
  /**
   * @property {node} children Content that will get render
   */
  children: PropTypes.node,
}

const Tooltip = memo(
  ({ as: componentType, fixed, className, children, ...props }) => {
    const ElementType = componentType || 'figure'
    return (
      <ElementType
        className={mods('cg-tooltip', { fixed }, className)}
        {...props}
      >
        {children}
      </ElementType>
    )
  },
)

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  as: 'figure',
  fixed: false,
}

Tooltip.propTypes = {
  /**
   * @property {elementType} as An element type to render as (string or function)
   */
  as: PropTypes.elementType,
  /**
   * @property {boolean} fixed Used to show the fixed tooltip
   */
  fixed: PropTypes.bool,
  /**
   * @property {string} className Additional Classes
   */
  className: PropTypes.string,
  /**
   * @property {node} children Content that will get render
   */
  children: PropTypes.node,
}

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent

export default Tooltip
