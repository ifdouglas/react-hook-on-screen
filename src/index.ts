import { useEffect, useState, useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useOnScreen(ref: any, triggerOnce = false) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isIntersecting && triggerOnce) {
      observer.unobserve(ref.current)
    }
  }, [isIntersecting, observer, ref, triggerOnce])

  return isIntersecting
}