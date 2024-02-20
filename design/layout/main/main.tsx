import React, { ReactNode } from "react"

import "./main.css"

interface MainProps {
  children: ReactNode
  // Add other props here
}

const Main = ({ children, ...rest }: MainProps) => {
  return <main {...rest}>{children}</main>
}
export default Main
