import React from 'react'
import { Link } from 'react-router-dom'
import { LeftStyle } from './style'
import Logo from '../../../../assets/img/logo.png'
import { Image } from '@chakra-ui/react'


function HeaderLeft({ theme }) {
    return (
        <LeftStyle>
            <Link to={'/'}>
                <Image src={Logo} alt='Gov Asssist' width={190}/>
            </Link>
        </LeftStyle>
    )
}

export default HeaderLeft