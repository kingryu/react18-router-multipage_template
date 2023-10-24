import React, { useState, FunctionComponent } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import classNames from 'clsx'
import { AnimateType, AnimateAction } from './type'
// import './animate.scss';

interface BasicComponent {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  id?: string
}

const ComponentDefaults = {
  className: '',
  style: {},
}

export interface AnimateProps extends BasicComponent {
  type: AnimateType
  action: AnimateAction
  loop: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'shake',
  action: 'initial',
  loop: false,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as AnimateProps

const classPrefix = `fly-animate`
export const Animate: FunctionComponent<
  Partial<AnimateProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { className, type, action, loop, onClick, children, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const [clicked, setClicked] = useState(false)

  const classes = classNames({
    'fly-ani-container': true,
    [`${classPrefix}-${type}`]: action === 'initial' || clicked ? type : false,
    loop,
  })
  const cls = classNames(classes, className)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClicked(true)
    // 如果不是无限循环，清除类名
    if (!loop) {
      setTimeout(() => {
        setClicked(false)
      }, 1000)
    }
    onClick && onClick(event)
  }

  return (
    <div className="fly-animate">
      <div className={cls} onClick={handleClick} {...rest}>
        {children}
      </div>
    </div>
  )
}

Animate.defaultProps = defaultProps
Animate.displayName = 'FlyAnimate'