'use client'
import { styled } from "@mui/material"

const ProjectStyles = {
Container: styled('div')(()=>({
    width:'100%',
    height:'90vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'30px'
})),

SubContainer: styled('div')(()=>({
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    gap:20,
    overflowY:'scroll'
})),

HorizontalBox: styled('div')(()=>({
    width:'20%',
    height:'30%',
    border:'1px solid #fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    borderRadius:'5px'
})),

VerticalBox: styled('div')(()=>({
    width:'15%',
    height:'50%',
    border:'1px solid #fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    borderRadius:'5px'


}))
}

export default ProjectStyles