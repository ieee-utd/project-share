import react from 'react'
import Footer from '../Components/Footer'

export function FooterContainer () {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Goal</Footer.Link>
                    <Footer.Link href="#">Members</Footer.Link>
                    <Footer.Link href="#">About IEEE</Footer.Link>
                </Footer.Column>  
                <Footer.Column>
                    <Footer.Title>Socials</Footer.Title>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>  
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Emails</Footer.Link>
                    <Footer.Link href="#">Phone Numbers</Footer.Link>
                    <Footer.Link href="#">Contact UTD</Footer.Link>
                </Footer.Column>  
                </ Footer.Row>
            </Footer.Wrapper>   
        </Footer>
    )
}