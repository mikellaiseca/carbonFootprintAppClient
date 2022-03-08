import IndexPage from '../pages/IndexPage/IndexPage'
import ContactUsPage from '../pages/ContactUsPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import UserDetailsPage from '../pages/UserDetailsPage'
import FootprintPage from '../pages/FootprintPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import PrivateRoute from './PrivateRoute'

import { Route, Routes } from "react-router-dom"
import FootprintPageFlight from '../pages/FootprintPageFlight'

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

            <Route path="/car-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPage />} />
            </Route>

            <Route path="/flight-form" element={<PrivateRoute />}>
                <Route path="" element={<FootprintPageFlight />} />
            </Route>

            <Route path="/news" element={<NewsPage />} />

        </Routes>
    )
}

export default AppRoutes