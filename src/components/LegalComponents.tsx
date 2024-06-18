import React from "react"

type Children = {
  children?:React.ReactNode
}

export function H4 ({children}:Children){
    return (<h4 className="font-bold text-lg py-1 text-red">{children}</h4>)
}
export function H3 ({children}:Children){
    return (<h3 className="font-bold text-2xl py-2 text-accent">{children}</h3>)
}
export function P ({children}:Children){
    return (<p className="text-justify py-1">{children}</p>)
}
