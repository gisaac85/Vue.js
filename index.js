let app = new Vue({
    'el': "#app",
    'data': {
        name: "<h1>Hello World</h1>",
        list: ['Apple', 'Orange', 'Banana'],
        newItem: '',
        inputTxt: ''
    },
    'methods': {
        deleteItem: function (item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
        },
        addItem: function () {
            this.list.push(this.newItem);
            this.newItem = '';
        },
        saveData: function (event) {
            console.log('Go clicked : ' + this.inputTxt);
            //Hello this is changing :) 
            this.inputTxt = '';

        }
    }
});


