import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useMemo, Suspense, useEffect } from "react"
import routes from "./routes";
import PublicRoute from "./public";
import PrivateRoute from "./private";
import Loader from "../common/Spinner/TransparentLoader";
import Home from "../pages/Home";
import GettingStarted from "../pages/GettingStarted";
import LotteryForm from "../pages/LotteryForm";


function AppRoutes () {
    
    const renderRoutes = useMemo(() =>
        routes.map((route, index) =>
                <PublicRoute
                    key={index}
                    {...route}
                />

        ), []
    )


    return(
		<Router>
            <Suspense fallback={<Loader />}>
				<Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/getting-started"
                        element={<GettingStarted />}
                    />
                    <Route
                        path="/lottery-form"
                        element={<LotteryForm />}
                    />
                </Routes>
			</Suspense>
		</Router>
    )
}

export default AppRoutes