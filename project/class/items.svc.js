"use strict";
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var ItemsSvc = (function () {
    function ItemsSvc(http) {
        this.http = http;
        this.items = [];
        this.itemsIndexById = {};
        this.checkedItems = [];
        this.loaded = false;
        this.itemSelected$ = new core_1.EventEmitter();
        this.itemChecked$ = new core_1.EventEmitter();
        this.itemsLoaded$ = new core_1.EventEmitter();
        this.onFiltered$ = new core_1.EventEmitter();
        this.onCreate$ = new core_1.EventEmitter();
        this.onEdit$ = new core_1.EventEmitter();
        this.onDelete$ = new core_1.EventEmitter();
        this.onCreated$ = new core_1.EventEmitter();
        this.onEdited$ = new core_1.EventEmitter();
        this.onDeleted$ = new core_1.EventEmitter();
    }
    ItemsSvc.prototype.create = function (item) {
        var $this = this;
        $this.resource.post(item).then(function (item) { return $this.onCreated$.emit(item); });
    };
    ItemsSvc.prototype.edit = function (item) {
        var $this = this;
        $this.resource.put(item).then(function (item) { return $this.onEdited$.emit(item); });
    };
    ItemsSvc.prototype.delete = function (item) {
        var $this = this;
        $this.resource.delete(item).then(function (item) { return $this.onDeleted$.emit(item); });
    };
    ItemsSvc.prototype.onSelect = function (item) {
        this.checkedItems = [];
        this.selectedItem = item;
        this.itemSelected$.emit(this.selectedItem);
    };
    ItemsSvc.prototype.onCheck = function (item) {
        if (this.selectedItem.id)
            this.checkedItems.push(this.selectedItem);
        var index = this.checkedItems.indexOf(item);
        if (index == -1)
            this.checkedItems.push(item);
        else if (this.checkedItems.length > 1) {
            this.checkedItems.splice(index, 1);
        }
        if (this.checkedItems.length == 1) {
            this.onSelect(this.checkedItems[0]);
        }
        else {
            this.selectedItem = {};
            this.itemChecked$.emit(this.checkedItems);
        }
    };
    ItemsSvc.prototype.unCheckIfChecked = function (item) {
        var index = this.checkedItems.indexOf(item);
        if (index == -1) {
            this.checkedItems.push(item);
        }
        this.onCheck(item);
    };
    ItemsSvc.prototype.getCheckedItemsIds = function () {
        if (this.checkedItems)
            return this.checkedItems.map(function (item) { return item.id; });
        return [];
    };
    ItemsSvc.prototype.getItemById = function (id) {
        return this.items.find(function (item) { return item.id == id; });
    };
    ItemsSvc.prototype.getList = function (query) {
        var $this = this;
        $this.lastQuery = query;
        return new Promise(function (resolve) {
            if ($this.loaded) {
                if ($this.items.length > 0)
                    $this.onSelect($this.items[0]);
                else
                    $this.onSelect({});
                resolve($this.items);
            }
            else {
                $this.resource.getList(query).then(function (items) {
                    console.log($this, items);
                    $this.items = items;
                    $this.loaded = true;
                    $this.itemsLoaded$.emit($this.items);
                    if ($this.items.length > 0)
                        $this.onSelect($this.items[0]);
                    else
                        $this.onSelect({});
                    resolve($this.items);
                });
            }
        });
    };
    return ItemsSvc;
}());
exports.ItemsSvc = ItemsSvc;
//# sourceMappingURL=items.svc.js.map