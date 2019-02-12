/**
 * Класс записи накопительных данных в localStorage
 */
class LocalStorage {

    constructor(key, data) {
        this.data = data;
        this.key = key;
    }

    setData(data) {
        if (!this.getData()) {
            let dataStorage = [data];
            localStorage.setItem(this.key, JSON.stringify(dataStorage));
        } else {
            let updateDataStorage = this.getData();
            updateDataStorage.push(data);
            localStorage.setItem(this.key, JSON.stringify(updateDataStorage));
        }
    }

    getData() {
        let storageData = localStorage.getItem(this.key);
        if (storageData !== undefined) {
            return JSON.parse(storageData);
        }
    }
}

export default LocalStorage