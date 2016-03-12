

interface AudioParameters {
    name: string;
    volume: number;
    pitch: number;
    pan: number;
    pos: number;
}

/**
 * AudioManager
 *
 * The static class that handles BGM, BGS, ME and SE.
 */
interface AudioManagerStatic {
    _bgmVolume: number;
    _bgsVolume: number;
    _meVolume: number;
    _seVolume: number;
    _currentBgm: AudioParameters;
    _currentBgs: AudioParameters;
    _bgmBuffer: Html5AudioStatic | WebAudio;
    _bgsBuffer: Html5AudioStatic | WebAudio;
    _meBuffer: Html5AudioStatic | WebAudio;
    _seBuffers: Array<Html5AudioStatic | WebAudio>;
    _staticBuffers: Array<Html5AudioStatic | WebAudio>;
    _replayFadeTime: number;
    _path: string;

    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;

    playBgm(bgm: AudioParameters, pos?: number): void;
    replayBgm(bgm: AudioParameters): void;
    isCurrentBgm(bgm: AudioParameters): boolean;
    updateBgmParameters(bgm: AudioParameters): void;
    updateCurrentBgm(bgm: AudioParameters, pos: number): void;
    stopBgm(): void;
    fadeOutBgm(duration: number): void;
    fadeInBgm(duration: number): void;

    playBgs(bgs: AudioParameters, pos?: number): void;
    replayBgs(bgs: AudioParameters): void;
    isCurrentBgs(bgs: AudioParameters): boolean;
    updateBgsParameters(bgs: AudioParameters): void;
    updateCurrentBgs(bgs: AudioParameters, pos: number): void;
    stopBgs(): void;
    fadeOutBgs(duration: number): void;
    fadeInBgs(duration: number): void;
    playMe(me: AudioParameters): void;
    updateMeParameters(me: AudioParameters): void;
    fadeOutMe(duration: number): void;
    stopMe(): void;
    playMe(me: AudioParameters): void;
    updateMeParameters(me: AudioParameters): void;
    fadeOutMe(duration: number): void;
    stopMe(): void;
    playSe(se: AudioParameters): void;
    updateSeParameters(buffer: AudioParameters, se: AudioParameters): void;
    stopSe(): void;
    playStaticSe(se: AudioParameters): void;
    loadStaticSe(se: AudioParameters): void;
    isStaticSe(se: AudioParameters): boolean;
    stopAll(): void;
    saveBgm(): AudioParameters;
    saveBgs(): AudioParameters;
    makeEmptyAudioObject(): AudioParameters;
    createBuffer(): Html5AudioStatic | WebAudio;
    updateBufferParameters(buffer: AudioParameters, configVolume: number, audio: AudioParameters): void;
    audioFileExt(): string;
    shouldUseHtml5Audio(): boolean;
    checkErrors(): void;
    checkWebAudioError(): void;
    checkWebAudioError(webAudio: Html5AudioStatic | WebAudio): void;
}
declare var AudioManager: AudioManagerStatic;

declare var $dataActors: Array<RPG.Actor>;
declare var $dataClasses: Array<RPG.Class>;
declare var $dataSkills: Array<RPG.Skill>;
declare var $dataItems: Array<RPG.Item>;
declare var $dataWeapons: Array<RPG.Weapon>;
declare var $dataArmors: Array<RPG.Armor>;
declare var $dataEnemies: Array<RPG.Enemy>;
declare var $dataTroops: Array<RPG.Troop>;
declare var $dataStates: Array<RPG.State>;
declare var $dataAnimations: Array<RPG.Animation>;
declare var $dataTilesets: Array<RPG.Tileset>;
declare var $dataCommonEvents: Array<RPG.CommonEvent>;
declare var $dataSystem: RPG.System;
declare var $dataMapInfos: Array<RPG.MapInfo>;
declare var $dataMap: RPG.Map;
declare var $gameTemp: Game_Temp;
declare var $gameSystem: Game_System;
declare var $gameScreen: Game_Screen;
declare var $gameTimer: Game_Timer;
declare var $gameMessage: Game_Message;
declare var $gameSwitches: Game_Switches;
declare var $gamevariables: Game_Variables;
declare var $gameSelfSwitches: Game_SelfSwitches;
declare var $gameActors: Game_Actors;
declare var $gameParty: Game_Party;
declare var $gameTroop: Game_Troop;
declare var $gameMap: Game_Map;
declare var $gamePlayer: Game_Player;
declare var $testEvent: Array<RPG.EventCommand>;

interface DatabaseFile {
    name: string;
    src: string;
}

interface SaveFileInfo {
    globalId: string;
    title: string;
    characters: Array<Array<any>>;// ?
    faces: Array<Array<any>>;// ?
    playtime: string;
    timestamp: number;
}

interface SaveContents {
    system: Game_System;
    screen: Game_Screen;
    timer: Game_Timer;
    switches: Game_Switches;
    variables: Game_Variables;
    selfSwitches: Game_SelfSwitches;
    actors: Game_Actors;
    party: Game_Party;
    map: Game_Map;
    player: Game_Party;
}

/**
 * DataManager
 *
 * The static class that manages the database and game objects.
 */

interface DataManagerStatic {
    _globalId: string;
    _lastAccessedId: number;
    _errorUrl: string;
    _databaseFiles: Array<DatabaseFile>;

    maxSavefiles: number;

    loadDatabase(): void;
    loadDataFile(name: string, src: string): void;
    isDatabaseLoaded(): boolean;
    loadMapData(mapId: number): void;
    makeEmptyMap(): void;
    isMapLoaded(): boolean;
    onLoad(object: RPG.Map): void;
    extractMetadata(data: any): void;//noteとmetaをもつDBオブジェクト
    checkError(): void;
    isBattleTest(): boolean;
    isEventTest(): boolean;
    isSkill(): boolean;
    isItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    createGameObjects(): void;
    setupNewGame(): void;
    setupBattleTest(): void;
    setupEventTest(): void;
    loadGlobalInfo(): Array<any>;
    saveGlobalInfo(info: Array<any>): void;
    isThisGameFile(savefileId: number): boolean;
    isAnySavefileExists(): boolean;
    latestSavefileId(): number;
    loadAllSavefileImages(): void;
    loadSavefileImages(info: SaveFileInfo): void;
    saveGame(savefileId: number): boolean;
    loadGame(savefileId: number): boolean;
    loadSavefileInfo(savefileId: number): any;
    lastAccessedSavefileId(): number;
    saveGameWithoutRescue(savefileId: number): boolean;
    loadGameWithoutRescue(savefileId: number): boolean;
    selectSavefileForNewGame(): void;
    makeSavefileInfo(): void;
    makeSaveContents(): SaveContents;
    extractSaveContents(contents: SaveContents);
}
declare var DataManager: DataManagerStatic;

interface PluginSettings {
    name: string;
    status: string;
    description: string;
    parameters: {[key: string]: string};
}
/**
 * PluginManager
 *
 * The static class that manages the plugins.
 */
interface PluginManagerStatic {
    _path: string;
    _scripts: Array<string>;
    _errorUrls: Array<string>;
    _parameters: {[key: string]: {[key: string]: string}};

    setup(plugins: Array<PluginSettings>): void;
    checkErrors(): void;
    parameters(name: string): any;
    setParameters(name: string, parameters: {[key: string]: string}): void;
    loadScript(name: string): void;
    onError(e: Event): void;
}
declare var PluginManager: PluginManagerStatic;

/**
 * SoundManager
 *
 * The static class that plays sound effects defined in the database.
 */

interface SoundManagerStatic {
    preloadImportantSounds(): void;
    loadSystemSound(n: number): void;
    playSystemSound(n: number): void;
    playCursor(): void;
    playOk: void;
    playCancel: void;
    playBuzzer: void;
    playEquip: void;
    playSave: void;
    playLoad: void;
    playBattleStart: void;
    playEscape: void;
    playEnemyAttack: void;
    playEnemyDamage: void;
    playEnemyCollapse: void;
    playBossCollapse1: void;
    playBossCollapse2: void;
    playActorDamage: void;
    playActorCollapse: void;
    playRecovery: void;
    playMiss: void;
    playEvasion: void;
    playMagicEvasion: void;
    playReflection: void;
    playShop: void;
    playUseItem: void;
    playUseSkill: void;
}
declare var SoundManager: SoundManagerStatic;

/**
 * StorageManager
 *
 * The static class that manages storage for saving game data.
 */
interface StorageManagerStatic {
    save(savefileId: number, json: string): void;
    load(savefileId: number): string;
    exists(savefileId: number): boolean;
    remove(savefileId: number): void;
    backup(savefileId: number): void;
    backupExists(savefileId: number): boolean;
    cleanBackup(savefileId: number): boolean;
    restoreBackup(savefileId: number): void;
    isLocalMode(): boolean;
    saveToLocalFile(savefileId: number, json: string): void;
    loadFromLocalFile(savefileId: number): string;
    loadFromLocalBackupFile(savefileId: number): string;
    localFileBackupExists(savefileId: number): boolean;
    localFileExists(savefileId: number): boolean;
    removeLocalFile(savefileId: number): void;
    saveToWebStorage(savefileId: number, json: string): void;
    loadFromWebStorage(savefileId: number): string;
    loadFromWebStorageBackup(savefileId: number): string;
    webStorageBackupExists(savefileId: number): boolean;
    webStorageExists(savefileId: number): boolean;
    removeWebStorage(savefileId: number): void;
    localFileDirectoryPath(): string;
    localFilePath(savefileId: number): string;
    webStorageKey(savefileId: number): string;
}
declare var StorageManager: StorageManagerStatic;


/**
 * TextManager
 *
 * The static class that handles terms and messages.
 */
interface TextManagerStatic {
    currencyUnit: string;
    level: string;
    levelA: string;
    hp: string;
    hpA: string;
    mp: string;
    mpA: string;
    tp: string;
    tpA: string;
    exp: string;
    expA: string;
    fight: string;
    escape: string;
    attack: string;
    guard: string;
    item: string;
    skill: string;
    equip: string;
    status: string;
    formation: string;
    save: string;
    gameEnd: string;
    options: string;
    weapon: string;
    armor: string;
    keyItem: string;
    equip2: string;
    optimize: string;
    clear: string;
    newGame: string;
    continue_: string;
    toTitle: string;
    cancel: string;
    buy: string;
    sell: string;
    alwaysDash: string;
    commandRemember: string;
    bgmVolume: string;
    bgsVolume: string;
    meVolume: string;
    seVolume: string;
    possession: string;
    expTotal: string;
    expNext: string;
    saveMessage: string;
    loadMessage: string;
    file: string;
    partyName: string;
    emerge: string;
    preemptive: string;
    surprise: string;
    escapeStart: string;
    escapeFailure: string;
    victory: string;
    defeat: string;
    obtainExp: string;
    obtainGold: string;
    obtainItem: string;
    levelUp: string;
    obtainSkill: string;
    useItem: string;
    criticalToEnemy: string;
    criticalToActor: string;
    actorDamage: string;
    actorRecovery: string;
    actorGain: string;
    actorLoss: string;
    actorDrain: string;
    actorNoDamage: string;
    actorNoHit: string;
    enemyDamage: string;
    enemyRecovery: string;
    enemyGain: string;
    enemyLoss: string;
    enemyDrain: string;
    enemyNoDamage: string;
    enemyNoHit: string;
    evasion: string;
    magicEvasion: string;
    magicReflection: string;
    counterAttack: string;
    substitute: string;
    buffAdd: string;
    debuffAdd: string;
    buffRemove: string;
    actionFailure: string;
    basic(basicId: number): string;
    param(paramId: number): string;
    command(commandId: number): string;
    message(messageId: string): string;
    getter(method: string, param: number): string;
}
declare var TextManager: TextManagerStatic;
