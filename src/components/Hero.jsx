"use client"

import markdownToHTML from "@/mypackage"
import { useEffect, useState } from "react"

export default function Hero() {
  const [msg, setMsg] = useState("")


  useEffect(() => {
    markdownToHTML("# Hello, world!")
      .then((x) => setMsg(x))
  }, [])

  return (
    <div>{ msg }</div>
  )
}