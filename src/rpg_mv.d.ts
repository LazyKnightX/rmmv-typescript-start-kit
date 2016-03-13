declare namespace MV {
    interface Uniforms {
        matrix: Matrix;
    }
    interface Matrix {
        type: string;
        value: Array<number>;
    }
    interface TouchInputEvents {
        trigger: boolean;
        cancelled: boolean;
        moved: boolean;
        released: boolean;
        wheelX: number;
        wheelY: number;
    }
    interface AudioParameters {
        name: string;
        volume: number;
        pitch: number;
        pan: number;
        pos: number;
    }
    interface BattleRewards {
        gold: number;
        exp: number;
        items: Array<RPG.BaseItem>;
    }
    interface BattlerAnimation {
        animationId: number;
        mirror: boolean;
        delay: number;
    }
    interface CommandItem {
        name: string;
        symbol: string;
        enabled: boolean;
        ext: any;
    }
    interface TextState {
        index: number;
        x: number;
        y: number;
        left: number;
    }
    interface BattleLogMethod {
        name: string;
        params: any;
    }
    interface Motion {
        index: number;
        loop: boolean;
    }
}
