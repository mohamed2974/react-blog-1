// ######################### SOCIAL MEDIA LINKS ######################### //
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialMedia({style, imgStyle}){
    return(
        <ul className={style}>
            <li className={imgStyle}><YouTubeIcon /></li>
            <li className={imgStyle}><FacebookIcon /></li>
            <li className={imgStyle}><TwitterIcon /></li>
            <li className={imgStyle}><InstagramIcon /></li>
            <li className={imgStyle}><LinkedInIcon /></li>
        </ul>
    )
}
