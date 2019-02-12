import React from 'react';
import LocalStorage from '../services/localStorage';

const RecordPage = () => {
    const date = new Date(); // текущее время/дата
    let inputValue = null; // значение текстового поля input

    /**
     * Метод получения и "отправки" данных в localStorage
     * @param e {obj} - объект события
     */
    const recordSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.recordForm;
        const formData = new FormData(form);
        const dataObject = {};

        formData.forEach(function (value, key) {
            dataObject[key] = value;
        });

        const storage = new LocalStorage('allData', dataObject);
        storage.setData(dataObject);
    };

    /**
     * Отслеживание измения в текстовом поле input
     * @param e {obj} - объект события
     */
    const changeInput = (e) => {
        inputValue = e.target.value;
    };

    return (
        <div className="page-wrap">
            <h2>Add record</h2>
            <form className="form" name="recordForm" onSubmit={recordSubmit}>
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
                <label className="form-label">
                    How much
                    <input className="form-input" type="text" name="money"
                           value={inputValue} onChange={changeInput}/>
                </label>
                <input type="hidden" value={date} name="date"/>
                <button className="form-btn">Save</button>
                <button className="form-btn">Cancel</button>
            </form>
        </div>
    );
};

export default RecordPage;
