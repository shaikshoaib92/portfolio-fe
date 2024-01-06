"use client"
import { styled } from "@mui/material"

const NavStyles = {
    Container: styled("div")(() => ({
        display: 'flex',
        justifyContent: "space-between"
    })),

    MenuContainer: styled("div")(() => ({
        width:'40%',
        display: "flex",
        justifyContent: 'space-around'
    })),

    MenuItem: styled('p')(()=>({
        fontSize:'0.8em',
        color:'#fff',
        cursor:'pointer'

    }))
}

export default NavStyles