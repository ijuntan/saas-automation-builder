import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="
        border-l-[1px] border-t-[1px] bp-20 h-screen
        rounded-l-2xl border-muted-foreground/20 overflow-scroll
    ">
        {props.children}
    </div>
  )
}

export default Layout