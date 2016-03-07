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
        return <RPG.BaseItem>item;
    }
}

var iFac = new ItemFactory().createBaseItem();
console.assert(iFac.id == 100);
console.assert(iFac.name == "momo");
console.assert(iFac.iconIndex == 16);
console.assert(iFac.description.contains("delicious"));
console.assert(iFac.note == "");
