declare global {
    interface Console {
        myLog(msg: string): void;
    }
}

export {};
// This file doesn't have any imports or exports,
// nor are we declaring a module, so we need to add this line to make it a module.

declare global {
    declare var $: number;
    declare var test: number;
}
