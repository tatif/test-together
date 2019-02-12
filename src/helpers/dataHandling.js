/**
 * Метод записи данных в LocalStorage
 * @param key {string} - ключ
 * @param value {obj} - записываемые данные
 */
const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Метод получения данных из localStorage
 * @param key {string} - ключ
 * @returns {any} - получаемые данные
 */
const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
export {setData, getData}