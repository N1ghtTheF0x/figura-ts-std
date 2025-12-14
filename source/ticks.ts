export const TICK_PER_SECOND = 20

export const seconds2tick = (tick: number) => tick * TICK_PER_SECOND
export const minutes2tick = (tick: number) => tick * TICK_PER_SECOND * 60
export const hours2tick = (tick: number) => tick * TICK_PER_SECOND * 60 * 60