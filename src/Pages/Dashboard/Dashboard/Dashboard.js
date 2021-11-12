import React, { useState } from 'react';
import DashboardSideBar from '../../../Shared/Navigation/DashboardSideBar/DashboardSideBar';


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <DashboardSideBar />
    );
};

export default Dashboard;