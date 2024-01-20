'use client'
import { styled } from "@mui/material"

const HomeStyles = {
Container: styled('div')(()=>({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'90vh',
    backgroundImage:'./system-architecture.png'
})),
SubContainer: styled('div')(()=>({
    width:'80%',
    display:'flex',
    gap:10,
    justifyContent:'space-around',
    alignItems:'center'
})),

HeroText: styled('p')(()=>({
    fontSize:'3em',
    color:'#111',
    fontWeight:700
}))
}

export default HomeStyles