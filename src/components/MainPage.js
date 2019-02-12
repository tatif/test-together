import React from 'react';
import UsersList from './UsersList';

let isSorted = true;

const MainPage = ({dataList, update}) => {
    if (!dataList) {
        return (<p>Nothing found! Please, add records</p>);
    }

    /**
     * Метод сортировки данных по дате
     */
    const sort = () => {
        const cloneDataList = [...dataList];
        const direction = isSorted ? 1 : -1;

        const sorted = cloneDataList.sort((a, b) => {
            if (new Date(a.date) === new Date(b.date)) {
                return 0;
            }
            return new Date(a.date) < new Date(b.date) ? direction : direction * -1;
        });

        isSorted = !isSorted;
        update(sorted);
    };

    return (
        <div className="page-wrap">
            <h2>Main list</h2>
            <button onClick={sort}>Sort by date</button>
            <UsersList data={dataList}/>
        </div>
    );
};

export default MainPage;
