import { useState, useEffect } from "react"

export const useHasScrolled = (distance = 550) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY >= distance

      scrollCheck !== scroll && setScroll(scrollCheck)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}
