import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Box } from '@chakra-ui/react';


function Main({ children, fullPage }) {
    return (
        <Box
            as='main'
            minH={fullPage ? '100vh' : ''}
            w={['full', 'full', '']}
            fontFamily='Inter'
            position={'relative'}
        >
            {children}
        </Box>
    )
}

const PageMainContainer = React.memo(
    ({
        title,
        description,
        pageClassName,
        children,
        fullPage,
    }) => {
        useEffect(() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, [])

        return (
            <React.Fragment>
                <Helmet>
                    {title && <title> {`${title} ${title ? '| Rentranzact' : 'Rentranzact'}`} </title>}
                    {description && <meta name="description" content={description} />}
                </Helmet>
                <Main className={`page ${pageClassName}`} fullPage={fullPage}>
                    {children}
                </Main>
            </React.Fragment>
        )
    }
)

PageMainContainer.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    pageClassName: PropTypes.string,
};

export default PageMainContainer;