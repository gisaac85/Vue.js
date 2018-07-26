let app = new Vue({
    'el': "#app",
    'data': {
        name: "Hello World",
        list: ['Apple', 'Orange', 'Banana'],
        newItem: ''
    },
    'methods': {
        deleteItem: function (item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
        },
        addItem: function () {
            this.list.push(this.newItem);
            this.newItem = '';
        }
    }
});


