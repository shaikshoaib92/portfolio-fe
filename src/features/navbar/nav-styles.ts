"use client"
import { styled } from "@mui/material"

const NavStyles = {
    Container: styled("div")(() => ({
        display: 'flex',
        justifyContent: "space-between",
        padding: "1.5em",

    })),

    MenuContainer: styled("div")(() => ({
        width: '40%',
        display: "flex",
        justifyContent: 'space-around'
    })),

    MenuItem: styled('p')(() => ({
        fontSize: '1em',
        color: '#aaa',
        cursor: 'pointer',
        fontWeight: 500

    }))
}

export default NavStyles