import ProjectStyles from "../projects-styles"

const HorizontalBoxComponent = ({ data }: any) => {

    const { HorizontalBox } = ProjectStyles

    return (
        <HorizontalBox ><p
            style={{
                color: 'wheat'
            }}
        >{data.title}</p></HorizontalBox>
    )
}

export default HorizontalBoxComponent