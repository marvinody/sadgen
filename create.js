const nToCoords = (scale) => n => scale * n

const scaleSvgD = (scale) => (arr) => {
  const scaler = nToCoords(scale)
  const [letter, ...nums] = arr;
  return [letter, nums.map(scaler)]
}

const svgHeader = (n = 1) => {
  const viewBoxCoords = [0, 0, 36, 36].map(nToCoords(n))
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBoxCoords.join(' ')}">`
}
const svgFooter = () => `</svg>`

const svgYellowBg = (n = 1) => {
  const color = '#FFCC4D'
  const d = [
    ['M', 36, 18],
    ['c', 0, 9.941, -8.059, 18, -18, 18],
    ['S', 0, 27.941, 0, 18, 8.059, 0, 18, 0],
    ['s', 18, 8.059, 18, 18],
  ].map(scaleSvgD(n))
  return `<path fill="${color}" d="${d.map(s => s.join(' ')).join('\n')}"/>`
}

const svgEyeBrowMouth = (n = 1) => {
  const color = '#664500'
  const d = [
    ['M', 22, 27],
    ['c', 0, 2.763, -1.791, 3, -4, 3, -2.21, 0, -4, -.237, -4, -3, 0, -2.761, 1.79, -6, 4, -6, 2.209, 0, 4, 3.239, 4, 6],
    ['z',],
    ['m', 8, -12],
    ['c', -.124, 0, -.25, -.023, -.371, -.072, -5.229, -2.091, -7.372, -5.241, -7.461, -5.374, -.307, -.46, -.183, -1.081, .277, -1.387, .459, -.306, 1.077, -.184, 1.385, .274, .019, .027, 1.93, 2.785, 6.541, 4.629, .513, .206, .763, .787, .558, 1.3, -.157, .392, -.533, .63, -.929, .63],
    ['z',],
    ['M', 6, 15],
    ['c', -.397, 0, -.772, -.238, -.929, -.629, -.205, -.513, .044, -1.095, .557, -1.3, 4.612, -1.844, 6.523, -4.602, 6.542, -4.629, .308, -.456, .929, -.577, 1.387, -.27, .457, .308, .581, .925, .275, 1.383, -.089, .133, -2.232, 3.283, -7.46, 5.374],
    ['C', 6.25, 14.977, 6.124, 15, 6, 15],
    ['z',]
  ].map(scaleSvgD(n))
  return `<path fill="${color}" d="${d.map(s => s.join(' ')).join('\n')}"/>`
}

const svgVertTears = (n = 1) => {
  const color = '#5DADEC'
  const d = [
    ['M', 24, 16],
    ['h', 4],
    ['v', 19,],
    ['l', -4, -.046],
    ['V', 16],
    ['z',],
    ['M', 8, 35],
    ['l', 4, -.04],
    ['V', 16],
    ['H', 8],
    ['v', 19],
    ['z',]
  ].map(scaleSvgD(n))
  return `<path fill="${color}" d="${d.map(s => s.join(' ')).join('\n')}"/>`
}

const svgHorizTears = (n = 1) => {
  const attributes = [
    ['cx', 18],
    ['cy', 34],
    ['rx', 18],
    ['ry', 2],
  ].map(scaleSvgD(n))
  return `<ellipse fill="#5DADEC"  ${attributes.map(atr => `${atr[0]}="${atr[1]}"`).join(' ')} />`
}

const svgEye = (n = 1) => {
  const color = '#664500'
  const d = [
    ['M', 14.999, 18],
    ['c', -.15, 0, -.303, -.034, -.446, -.105, -3.512, -1.756, -7.07, -.018, -7.105, 0, -.495, .249, -1.095, .046, -1.342, -.447, -.247, -.494, -.047, -1.095, .447, -1.342, .182, -.09, 4.498, -2.197, 8.895, 0, .494, .247, .694, .848, .447, 1.342, -.176, .35, -.529, .552, -.896, .552],
    ['z',],
    ['m', 14, 0],
    ['c', -.15, 0, -.303, -.034, -.446, -.105, -3.513, -1.756, -7.07, -.018, -7.105, 0, -.494, .248, -1.094, .047, -1.342, -.447, -.247, -.494, -.047, -1.095, .447, -1.342, .182, -.09, 4.501, -2.196, 8.895, 0, .494, .247, .694, .848, .447, 1.342, -.176, .35, -.529, .552, -.896, .552],
    ['z',],
  ].map(scaleSvgD(n))
  return `<path fill="${color}" d="${d.map(s => s.join(' ')).join('\n')}"/>`
}

const svgTongue = (n = 1) => {
  const attributes = [
    ['cx', 18],
    ['cy', 27],
    ['rx', 3],
    ['ry', 2],
  ].map(scaleSvgD(n))
  return `<ellipse fill="#E75A70" ${attributes.map(atr => `${atr[0]}="${atr[1]}"`).join(' ')} />`
}


const make = (n = 1) => {
  return [
    svgHeader(n),
    ...makeHelper(n),
    svgFooter(),
  ].join('\n')
}

const makeHelper = (n = 1) => {
  return [
    svgYellowBg(n),
    svgEyeBrowMouth(n),
    svgVertTears(n),
    svgEye(n),
    svgHorizTears(n),
    svgTongue(n),
  ].map(s => `\t${s}`)
}


// console.log(make(1))

console.log(make(2))