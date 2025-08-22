import * as React from "react"
import { cn } from "@/lib/utils"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'briefcase' | 'chart' | 'edit' | 'lightning' | 'check' | 'arrow-down' | 'external-link' | 'download' | 'play'
  size?: number | string
}

const iconPaths = {
  briefcase: "M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z",
  chart: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
  edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  lightning: "M13 10V3L4 14h7v7l9-11h-7z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  'arrow-down': "M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z",
  'external-link': "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",
  download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m7-10v12m-4-4l4 4 4-4",
  play: "M8 5v14l11-7z"
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, className, ...props }, ref) => {
    const path = iconPaths[name]
    
    if (!path) {
      console.warn(`Icon "${name}" not found`)
      return null
    }

    return (
      <svg
        ref={ref}
        className={cn("inline-block", className)}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d={path} />
      </svg>
    )
  }
)

Icon.displayName = "Icon"