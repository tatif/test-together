import React from 'react';
import UsersList from './UsersList';
import {getData} from './../helpers/dataHandling';

const ReportPage = () => {

    return (
        <div className="page-wrap">
            <h2>Report</h2>
            <UsersList data={getData('allData')}/>
        </div>
    );
};

export default ReportPage;
