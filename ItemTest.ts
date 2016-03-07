class ItemFactory {
    createBaseItem(): RPG.BaseItem {
        var item = {
            id: 100,
            name: "momo",
            iconIndex: 16,
            description: "delicious peach",
            note: "",
            meta: { key1: false, key2: "string" }
        }
        return item;
    }
}

var baseItem = new ItemFactory().createBaseItem();
console.assert(baseItem.id == 100);
console.assert(baseItem.name == "momo");
console.assert(baseItem.iconIndex == 16);
console.assert(baseItem.description.contains("delicious"));
console.assert(baseItem.note == "");
console.assert(!baseItem.meta.key1);
console.assert(!baseItem.meta.key2 == "string");
