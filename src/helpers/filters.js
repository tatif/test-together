/**
 * Вспомагательный метод фильтрования данных
 * @param data {array} - массив объектов
 * @param field {string} - ключ, по которому ищут совпадение
 * @param value {string} - значение, по которому ищут совпадение
 */
const filterBy = (data, field, value) => {
    if (data && data.length > 0 && value !== '') {
        return data.filter(item => item[field].toLowerCase() === value.toLowerCase());
    }
};
export {filterBy}