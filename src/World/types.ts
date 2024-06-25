export type WithTick<T> =  T & {
    tick: (delta: number) => void;
}
