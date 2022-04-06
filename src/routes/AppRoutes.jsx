import IndexPage from '../pages/IndexPage/IndexPage'
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import PrivateRoute from './PrivateRoute'
import FootprintPageMain from '../pages/FootprintPageMain/FootprintPageMain'
import FootprintPageCar from '../pages/FootprintPages/FootprintPageCar'
import { Route, Routes } from "react-router-dom"
import FootprintPageFlight from '../pages/FootprintPages/FootprintPageFlight'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FootprintPageShipping from '../pages/FootprintPages/FootprintPageShipping'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />

            <Route path="/contact-us" element={<ContactUsPage />} />

            <Route path="/log-in" element={<LoginPage />} />

            <Route path="/sign-up" element={<SignupPage />} />

            <Route path="/users" element={<PrivateRoute />}>
                <Route path="" element={<UsersListPage />} />
            </Route>

            <Route path="/users/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<UserDetailsPage />} />
            </Route>

            <Route path="/footprint-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPageMain />} />
            </Route>

            <Route path="/car-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPageCar />} />
            </Route>

            <Route path="/flight-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPageFlight />} />
            </Route>

            <Route path="/shipping-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPageShipping />} />
            </Route>

            <Route path="/news" element={<NewsPage />} />

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes