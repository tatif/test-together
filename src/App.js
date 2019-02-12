import React, {useState} from 'react';
import MainPage from './components/MainPage';
import {getData} from './helpers/dataHandling';

const App = () => {
    const [currentData, updateData] = useState(getData('allData'));

    return (
        <div className="main">
            <MainPage dataList={currentData} update={updateData}/>
        </div>
    );
};

export default App;
