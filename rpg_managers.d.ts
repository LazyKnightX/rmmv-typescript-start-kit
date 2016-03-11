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
