import React from "react";
import { Route } from "react-router-dom";




const PublicRoutes = ({ 
    component: Element,
    isAuthenticated,
    layout,
    preload,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            path={rest.path}
            element={<Element />}
        />
    )
}

export default PublicRoutes