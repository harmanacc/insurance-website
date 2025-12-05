'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface TypewriterProps {
  texts: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
  loop?: boolean
  cursor?: boolean
  cursorClassName?: string
  className?: string
}

export function Typewriter({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true,
  cursor = true,
  cursorClassName,
  className,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setDisplayedText(currentText.substring(0, displayedText.length + 1))

          if (displayedText === currentText) {
            // Finished typing → pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          // Deleting
          setDisplayedText(currentText.substring(0, displayedText.length - 1))

          if (displayedText === '') {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pauseTime])

  // Reset when texts change
  useEffect(() => {
    setDisplayedText('')
    setTextIndex(0)
    setIsDeleting(false)
  }, [texts])

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      {cursor && (
        <span
          className={cn('inline-block w-1 bg-orange-500 animate-pulse ml-1', cursorClassName)}
          style={{ height: '1.1em', verticalAlign: 'baseline' }}
        >
          &nbsp;
        </span>
      )}
    </span>
  )
}
