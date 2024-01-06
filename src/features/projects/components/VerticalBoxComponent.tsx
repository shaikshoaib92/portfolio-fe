import ProjectStyles from "../projects-styles"

const VerticalBoxComponent = ({data}:any)=> {
    const {VerticalBox } = ProjectStyles

return(
<VerticalBox>
    <p
    style={{
        color:'wheat'
    }}
    >{data.title}</p>
</VerticalBox>
)
}

export default VerticalBoxComponent