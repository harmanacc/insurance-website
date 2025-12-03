import type React from 'react'
import { iconIndex } from '@/app/assets/icons'
import { cn } from '@/lib/utils'

export type IconKey = keyof typeof iconIndex

const sizeOptions = {
  base: 'size-6',
  xs: 'size-4',
  sm: 'size-5',
  lg: 'size-8',
}

export type IconSizeKey = keyof typeof sizeOptions

const colorOptions = {
  primary: 'text-text-highlight',
  secondary: 'text-secondary',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-accent-foreground',
  error: 'text-danger-foreground',
  white: 'text-white',
}

export type IconColorKey = keyof typeof colorOptions

interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconKey
  className?: string
  size?: IconSizeKey
  color?: IconColorKey
}

export const CustomIcon = ({
  icon,
  className,
  size = 'base',
  color = 'secondary',
}: BaseIconProps) => {
  const IconComponent = iconIndex[icon]
  return (
    <IconComponent
      className={cn(
        'cursor-pointer text-secondary',
        sizeOptions[size],
        colorOptions[color],
        className,
      )}
    />
  )
}
