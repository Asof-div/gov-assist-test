import { Box } from '@chakra-ui/react'
import React from 'react'
import { FadeLoader } from 'react-spinners'


function TransparentLoader() {
    return (
        <Box as='div' 
            width='100%'
            height='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='fixed'
            backgroundColor={'transparent'}
            // backdropFilter={{blur: '6px'}}
            top={0}
            left={0}
            zIndex={9999}
        >
            <FadeLoader
				color={'#fff'}
				height={20}
				width={10}
				radius={2}
				margin={2}
			/>
        </Box>
    )
}

export default TransparentLoader