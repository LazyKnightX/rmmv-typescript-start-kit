# rmmv.d.ts
rpg maker mv d.ts

## Core
* Window -> **_Window**(abstract class)

## Additional Interfaces

### MV
* AudioParameters
* BattleLogMethod
* BattlerAnimation
* BattleRewards
* CommandItem
* ConfigData
* DatabaseFile
* Matrix
* Motion
* PluginSettings
* SaveContents
* SaveFileInfo
* TextState
* TouchInputEvents

### RPG
* BaseItem
* EquipItem
* MetaData
* UsableItem

## Tips

### To add a method to an existing class

    export {};
    declare global {
        interface Scene_Base {
            newMtd(): string;
        }
        interface DataManagerStatic {
            newMtd(): number;
        }
    }

    Scene_Base.prototype.newMtd = function(): string {
        return '123';
    };

    DataManager.newMtd =  function(): number {
        return 456;
    };

    //
    var scene = new Scene_Base();
    var num = scene.newMtd() + DataManager.newMtd().toString();
    console.assert(num === '123456');

### To add a processing to a method
This is equivalent to alias in RGSS(Ruby).

    var mtd = Scene_Base.prototype.newMtd;
    Scene_Base.prototype.newMtd = function() {
        var a = mtd.call(this);
        return a + '123';
    };

    //
    console.assert(new Scene_Base().newMtd() === '123123');
