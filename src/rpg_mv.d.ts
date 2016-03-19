declare namespace MV {
    export interface Uniforms {
        matrix: Matrix;
    }
    export interface Matrix {
        type: string;
        value: Array<number>;
    }
    export interface TouchInputEvents {
        trigger: boolean;
        cancelled: boolean;
        moved: boolean;
        released: boolean;
        wheelX: number;
        wheelY: number;
    }
    export interface AudioParameters {
        name: string;
        volume: number;
        pitch: number;
        pan: number;
        pos: number;
    }
    export interface BattleRewards {
        gold: number;
        exp: number;
        items: Array<RPG.BaseItem>;
    }
    export interface BattlerAnimation {
        animationId: number;
        mirror: boolean;
        delay: number;
    }
    export interface CommandItem {
        name: string;
        symbol: string;
        enabled: boolean;
        ext: any;
    }
    export interface TextState {
        index: number;
        x: number;
        y: number;
        left: number;
    }
    export interface BattleLogMethod {
        name: string;
        params: any;
    }
    export interface Motion {
        index: number;
        loop: boolean;
    }
}
