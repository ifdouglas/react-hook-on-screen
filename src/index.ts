import { useEffect, useState, useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useOnScreen(ref: any) {
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
    if (isIntersecting) {
      observer.unobserve(ref.current)
    }
  }, [isIntersecting, observer, ref])

  return isIntersecting
}