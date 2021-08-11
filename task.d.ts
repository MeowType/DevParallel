import { Ident } from "./ident";
export declare const identCenter: WeakMap<Ident, any>;
export declare const stack: Set<Ident>[];
export declare const stackCenter: WeakMap<Ident, Set<Ident>>;
export declare const groupStack: WeakMap<any, Set<Ident>>;
export declare function build_group<T extends object>(obj: T, stack: Set<Ident>): T;
export declare function inst<T extends object>(ident: Ident, obj: T): T;
export declare function belong(ident: Ident, stack: Set<Ident>): void;
export declare function instack<R>(cb: (stack: Set<Ident>) => R): R;