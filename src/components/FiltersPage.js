import React, {useState} from 'react';
import UsersList from './UsersList';
import {filterBy} from './../helpers/filters';
import {setData, getData} from '../helpers/dataHandling';

const FiltersPage = () => {

    const allData = getData('allData'); // получение всех данных из localStorage
    let inputValue = null; //значение текстового поля input
    let message;

    let [usersList, updateData] = useState();

    /**
     *  Метод получения и "отправки" данных в localStorage
     * @param e {obj} - объект события
     */
    const filtersSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.filtersForm;
        const formData = new FormData(form);
        const filtersData = {};

        formData.forEach(function (value, key) {
            filtersData[key] = value;
        });

        setData('filtersData', filtersData);
        usersList = getData('filtersData');
        updateData(filteredData(usersList));
    };

    /**
     * Метод фильтрования данных
     * @param dataByFilters {array} - массив данных, который необходимо отфильтровать
     * @returns {Array|*} - отфильтрованные данные / сообщение
     */
    const filteredData = (dataByFilters) => {
        if (dataByFilters) {
            const matchByDebt = filterBy(allData, 'debt', dataByFilters.debt);
            const matchByName = filterBy(allData, 'name', dataByFilters.name);
            const matchBydebtAndName = filterBy(matchByDebt, 'name', dataByFilters.name);
            let usersData = [];

            if (dataByFilters.debt === "borrow" && dataByFilters.name === "") {
                usersData = matchByDebt;
            } else if (dataByFilters.debt === "lent" && dataByFilters.name === "") {
                usersData = matchByDebt;
            } else if (dataByFilters.debt === "" && dataByFilters.name !== "") {
                usersData = matchByName;
            } else if (dataByFilters.debt !== "" && dataByFilters.name !== "") {
                usersData = matchBydebtAndName;
            } else if (dataByFilters.debt === "" && dataByFilters.name === "") {
                message = () => {
                    return (<p>Choose filter</p>);
                }
            } else {
                message = () => {
                    return (<p>No match</p>);
                }
            }
            return usersData || message;
        }
    };

    /**
     * Отслеживание измения в текстовом поле input
     * @param e {obj} - объект события
     */
    const changeInput = (e) => {
        inputValue = e.target.value;
    };

    return (
        <div>
            <h2>Filters</h2>
            <form className="form" name="filtersForm" onSubmit={filtersSubmit}>
                <label className="form-label">
                    <input className="form-radio" type="radio" name="debt"
                           value="borrow" onChange={changeInput}/>
                    Borrow
                </label>
                <label className="form-label">
                    <input className="form-radio" type="radio" name="debt"
                           value="lent" onChange={changeInput}/>
                    Lent
                </label>
                <label className="form-label">
                    Who
                    <input className="form-input" type="text" name="name"
                           value={inputValue} onChange={changeInput}/>
                </label>
                <button className="form-btn">Save</button>
                <button className="form-btn">Cancel</button>
            </form>
            <UsersList data={usersList} update={updateData}/>
            {message}
        </div>
    );
};

export default FiltersPage;
