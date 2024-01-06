'use client'
import { useRouter } from "next/navigation"
import NavStyles from "./nav-styles"

const Navbar = () => {
    const { Container, MenuContainer, MenuItem } = NavStyles

    const router = useRouter()


    return (
        <Container>
            logo
            <MenuContainer>
                <MenuItem
                    onClick={() => router.push('/')}
                >Home</MenuItem>
                <MenuItem
                    onClick={() => router.push('/projects')}
                >Project</MenuItem>
                <MenuItem>Experience</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuContainer>
        </Container>
    )
}

export default Navbar