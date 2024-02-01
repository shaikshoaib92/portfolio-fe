'use client'
import { styled } from "@mui/material"

const ProjectStyles = {
    Container: styled('div')(() => ({
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })),

    SubContainer: styled('div')(() => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap:10,
        justifyContent: 'center',
        alignItems: 'center',
    })),

    HorizontalBox: styled('div')(() => ({
        width: '30%',
        height: '15em',
        display: 'flex',
        justifyContent: 'center',
        alignItems:"center",
        textAlign: 'center',
        boxShadow: "2px 3px 7px 0px rgba(0,0,0,0.54)"

    })),

    VerticalBox: styled('div')(() => ({
        width: '15%',
        height: '50%',
        border: '1px solid #fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '5px'


    }))
}

export default ProjectStyles