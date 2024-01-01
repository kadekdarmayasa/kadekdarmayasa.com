export interface Tilt {
  reverse: boolean // reverse the tilt direction
  max: number // max tilt rotation (degrees)
  perspective: number // Transform perspective, the lower the more extreme the tilt gets.
  scale: number // 2 = 200%, 1.5 = 150%, etc..
  speed: number // Speed of the enter/exit transition
  transition: boolean // Set a transition on enter/exit.
  axis: 'x' | 'y' | false // What axis should be disabled. Can be X or Y.
  reset: boolean // If the tilt effect has to be reset on exit.
  easing: string // Easing on enter/exit.
}

const tilt: Tilt = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: 'x',
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

export { tilt }
