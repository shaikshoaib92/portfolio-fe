'use client'
import { styled } from "@mui/material"

const ExererienceStyles = {
    Container: styled('div')(() => ({
        width: '100%',
        height: '90vh'
    })),

    SubContainer: styled('div')(() => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })),

    CompanyNameHeading: styled("p")(() => ({
        margin: 0,
        fontSize: "1.3em",

        color: "#111",
        fontWeight: 500,
        opacity: 0.9
    })),

    TotalTenure: styled("p")(() => ({
        margin: 0,
        fontSize: "1em",
        color: "#808080"
    })),

    RoleText: styled("p")(() => ({
        fontSize: "1.5em",
        margin: 0,
        fontWeight: 600,
    })),

    RoleTenure: styled("p")(()=>({
        margin:0,
        fontSize:"0.9em",
        color:"#666"
    }))
}

export default ExererienceStyles