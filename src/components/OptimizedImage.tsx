import * as React from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
  priority?: boolean
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, fallback, priority = false, className, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false)

    // Generate WebP source if supported
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    const shouldUseWebP = !src.includes('.webp') && !imageError

    const handleError = () => {
      setImageError(true)
    }

    const handleLoad = () => {
      setIsLoaded(true)
    }

    return (
      <picture>
        {shouldUseWebP && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          ref={ref}
          src={imageError && fallback ? fallback : src}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onError={handleError}
          onLoad={handleLoad}
          {...props}
        />
      </picture>
    )
  }
)

OptimizedImage.displayName = "OptimizedImage"