'use client'
import { styled } from "@mui/material"

const HomeStyles = {
Container: styled('div')(()=>({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    , height:'90vh'
})),
SubContainer: styled('div')(()=>({
    width:'80%',
    display:'flex',
    gap:10,
    justifyContent:'space-around',
    alignItems:'center'
})),

HeroText: styled('p')(()=>({
    fontSize:'1.6em',
    color:'#fff'
}))
}

export default HomeStyles