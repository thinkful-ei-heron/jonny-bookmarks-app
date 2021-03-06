const store = {bookmarks: [], adding: false, error: null, filter: 0};

const findById = function (id) {
    return this.store.bookmarks.find(currentItem => currentItem.id === id);
};


const addItem = function (bookmark) {
    Object.assign(bookmark, {expanded: false})
    this.store.bookmarks.push(bookmark);
};

const findAndDelete = function (id) {
    this.store.bookmarks = this.store.bookmarks.filter(currentItem => currentItem.id !== id);
};

const findAndUpdate = function (id, newData) {
    const currentItem = this.findById(id);
    Object.assign(currentItem, newData);
};
const toggleAdding = function () {
    this.store.adding = !this.store.adding;
};

const setError = function (error) {
    this.store.error = error;
};

const sortData = function (sortingX) {
    switch (sortingX) {
        case 'lRating':
            store.bookmarks.sort(function (a, b) {
                return  a.rating - b.rating;
            });
            break;
        case 'hRating':
            store.bookmarks.sort(function (a, b) {
                return b.rating - a.rating;
            });
            break;
        case 'azTitle':
            store.bookmarks.sort(function (a,b) {
                const nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0 //default return value (no sorting)
            });
            break;
        case 'zaTitle':
            store.bookmarks.sort(function (a,b) {
                const nameA=b.title.toLowerCase(), nameB=a.title.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0 //default return value (no sorting)
            });
            break;
        default:
            store.bookmarks.sort(function (a,b) {
                const nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0 //default return value (no sorting)
            });
            break;
    }
};

export default {
    store,
    findById,
    addItem,
    findAndDelete,
    findAndUpdate,
    toggleAdding,
    setError,
    sortData
};