import { Route, redirect, useLocation } from "react-router-dom";



const PrivateRoute = ({
    component: Component,
    layout: Layout,
    isAuthenticated,
	...rest
}) => {

	if (!isAuthenticated) {
		return redirect("/login");
	}

	return (
		<Route
			{...rest}
            element={(
                    <Layout>
                        <Component />
                    </Layout>
                )
			}
		/>
	);
};


export default PrivateRoute;
