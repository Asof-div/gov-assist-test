import React from "react"
import { VStack } from '@chakra-ui/react'
import TransparentLoader from "../common/Spinner/TransparentLoader"
// import DesktopBg from "assets/img/desktop_bg.svg"


export function DefaultLayout ({ children }) {

    return (
        <React.Fragment>
            <VStack
                // bgImg={DesktopBg}
                bgRepeat='no-repeat'
                bgSize='cover'
                objectFit='cover'
                minH='100vh'
            >
                {children}
            </VStack>
        </React.Fragment>
    )
}