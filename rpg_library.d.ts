declare namespace RPG {
    export interface Map {
        /**
         * マップの表示名。
         */
        displayName: string;
        /**
         * マップで使用するタイルセットの ID。
         */
        tilesetId: number;
        /**
         * マップの幅。
         */
        width :number;
        /**
         * マップの高さ。
         */
        height :number;
        /**
         * スクロールタイプ (0: ループしない、1:縦のみループする、2:横のみループする、3:縦横ともループする)。
         */
        scrollType :number;
        /**
         * 戦闘背景指定が有効かどうかを示す真偽値。
         */
        specifyBattleback: boolean;
        /**
         * 戦闘背景指定が有効なとき、床グラフィックのファイル名。
         */
        battleback1Name: string;
        /**
         * 戦闘背景指定が有効なとき、壁グラフィックのファイル名。
         */
        battleback2_name: string;
        /**
         * BGM 自動切り替えが有効かどうかを示す真偽値。
         */
        autoplayBgm: boolean;
        /**
         * BGM 自動切り替えが有効なとき、その BGM。
         */
        bgm: AudioFile;
        /**
         * BGS 自動切り替えが有効かどうかを示す真偽値。
         */
        autoplayBgs: boolean
        /**
         * BGS 自動切り替えが有効なとき、その BGS 。
         */
        bgs: AudioFile;
        /**
         * [ダッシュを禁止する] オプションの真偽値。
         */
        disableDashing: boolean;
        /**
         * エンカウントリスト。RPG.Map.Encounter の配列です。
         */
        encounterList: Array<Map.Encounter>;
        /**
         * 平均エンカウント歩数。
         */
        encounterStep :number;
        /**
         * 遠景グラフィックのファイル名。
         */
        parallaxName: string;
        /**
         * 遠景の [横方向ループ] オプションの真偽値。
         */
        parallaxLoopX: boolean;
        /**
         * 遠景の [縦方向ループ] オプションの真偽値。
         */
        parallaxLoopY: boolean;
        /**
         * 遠景が横方向に自動スクロールする速度。
         */
        parallaxSx :number;
        /**
         * 遠景が縦方向に自動スクロールする速度。
         */
        parallaxSy :number;
        /**
         * 遠景の [マップエディタに表示する] オプションの真偽値。
         */
        parallaxShow: boolean;
        /**
         * メモ。
         */
        note: string;
        /**
         * マップデータ本体。タイル ID および付随するデータの三次元配列 (Table) です。
         */
        data: Array<any>;
        /**
         * マップイベント。イベント ID をキー、RPG.Event のインスタンスを値とするハッシュです。
         */
        events: {key: number};

    }
    export namespace Map {
        export interface Encounter {
            troopId: number;
            weight: number;
            regionSet: Array<number>;
        }
    }
    export interface Trait {
        code: number;
        dataId: number;
        value: number;
    }

    export interface State {
        autoRemovalTiming: number;
        chanceByDamage: number;
        iconIndex: number;
        id: number;
        minTurns: number;
        maxTurns: number;
        message1: string;
        message2: string;
        message3: string;
        message4: string;
        meta: {};
        motion: number;
        name: string;
        note: string;
        overlay: number;
        priority: number;
        releaseByDamage: boolean;
        removeAtBattleEnd: boolean;
        removeByDamage: boolean;
        removeByRestriction: boolean;
        removeByWalking: boolean;
        restriction: number;
        stepToRemove: number;
        traits: Array<Trait>;
    }
    export namespace Class {
        export interface Learning {
            level: number;
            skillId: number;
            note: string;
        }
    }

    export interface Actor {
        id: number;
        name: string;
        nickname: string;
        classId: number;
        initialLevel: number;
        maxLevel: number;
        characterName: string;
        characterIndex: number;
        faceName: string;
        faceIndex: number;
        equips: Array<number>;
        profile: string;
        note: string;
        meta: {};
        traits: Array<Trait>;
    }
    export interface Class {
        id: number;
        name: string;
        expParams: Array<number>;
        learnings: Array<Class.Learning>;
        params: Array<Array<number>>;
        traits: Array<Trait>;
        note: string;
        meta: {};
    }

    export interface BaseItem {
        id: number;
        name: string;
        iconIndex: number;
        description: string;
        note: string;
        meta: {};
    }

    export interface EquipItem extends BaseItem {
        etypeId: number;
        params: Array<number>;
        price: number;
        traits: Array<Trait>;
    }
    export interface Weapon extends EquipItem {
        animationId: number;
        wtypeId: number;
    }
    export interface Armor extends EquipItem {
        atypeId: number;
    }


    export interface UsableItem extends BaseItem {
        animationId: number;
        damage: {};
        effects: Array<UsableItem.Effect>;
        hitType: number;
        speed: number;
        successRate: number;
        tpGain: number;
        occasion: number;
    }

    export interface Skill extends UsableItem {
        message1: string;
        message2: string;
        mpCost: number;
        repeats: number;
        requiredWtypeId1: number;
        requiredWtypeId2: number;
        scope: number;
        stypeId: number;
        tpCost: number;
    }

    export interface Item extends UsableItem {
        consumable: boolean;
        itypeId: number;
        price: number;
    }

    export interface Enemy {

    }
    export namespace Enemy {
        export interface Action {
            skillId: number;
            conditionType: number;
            conditionParam1: number;
            conditionParam2: number;
            rating: number;
        }
    }


    export namespace UsableItem {
        export interface Effect {
            code: number;
            dataId: number;
            value1: number;
            value2: number;
        }
    }
    export interface Troop {

    }

    export interface CommonEvent {
        id: number;
        list: Array<EventCommand>;
        name: string;
        switchId: number;
        trigger: number;
    }


    export interface Vehicle {
        bgm: AudioFile;
        characterIndex: number;
        characterName: string;
        startMapId: number;
        startX: number;
        startY: number;
    }

    export interface Event {
        id: number;
        meta: {};
        name: string;
        note: string;
        pages: Array<Event.Page>;
        x: number;
        y: number;
    }

    namespace Event {
        interface Page {
            conditions: Array<Page.Condition>;
            directionFix: boolean;
            image: Page.Graphic;
            list: Array<EventCommand>;
            moveFrequency: number;
            moveRoute: Array<MoveRoute>;
            moveSpeed: number;
            moveType: number;
            priorityType: number;
            stepAnime: boolean;
            through: boolean;
            trigger: number;
            walkAnime: boolean;
        }
        namespace Page {
            interface Condition {
                actorId: number;
                actorValid: boolean;
                itemId: number;
                itemValid: boolean;
                selfSwitchCh: string;
                selfSwitchValid: boolean;
                switch1Id: number;
                switch1Valid: boolean;
                switch2Id: number;
                switch2Valid: boolean;
                variableId: number;
                variableValid: boolean;
                variableValue: number;
            }
            interface Graphic {
                tileId: number;
                characterName: string;
                direction: number;
                pattern: number;
                characterIndex: number;
            }
        }

    }




    export interface EventCommand {
        code: number;
        indent: number;
        parameters: Array<any>;
    }

    export interface MoveRoute {
        list: Array<MoveCommand>;
        repeat: boolean;
        skippable: boolean;
        wait: boolean;
    }

    export interface MoveCommand {
        code: number;
        parameters: Array<any>;
    }

    export interface Tileset {
        id: number;
        name: string;
        mode: number;
        tilesetNames: Array<string>;
        flags: Array<number>;
        note: string;
        meta: {};
    }

    export interface BattlerAnimation {
        animationId: number;
        mirror: boolean;
        delay: number;
    }

    export interface Animation {
        id: number;
        name: string;
        animation1Name:string;
        animation1Hue:number;
        animation2Name:string;
        animation2Hue:number;
        position: number;
        frameMax: number;
        frames: Array<Array<number>>;
        timings: Array<Animation.Timing>;
    }
    export namespace Animation {
        export interface Timing {
            frame: number;
            se: AudioFile;
            flashScope: number;
            flashColor: Array<number>;
            flashDuration: number;
        }
    }

    export interface AudioFile {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }
}
declare module 'rpg_library' {
    export = RPG;
}
