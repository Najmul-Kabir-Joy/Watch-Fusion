import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Spinner from '../../../Shared/Spinner/Spinner';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const admin = window.localStorage.getItem('admin');
    if (isLoading) {
        return <Spinner />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;