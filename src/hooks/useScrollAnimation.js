import { useEffect, useRef, useState } from 'react'

/**
 * Hook to trigger animation when element enters viewport.
 * @param {object} options - IntersectionObserver options
 * @returns {{ ref, isVisible }} - ref to attach to element, isVisible boolean
 */
export function useScrollAnimation(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target) // animate once
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -60px 0px',
                ...options,
            }
        )

        const el = ref.current
        if (el) observer.observe(el)

        return () => {
            if (el) observer.unobserve(el)
        }
    }, [])

    return { ref, isVisible }
}
