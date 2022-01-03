const powersOfTwo = Array(29)
  .fill(0)
  .map((_, i) => Math.pow(2, i))

// TODO: iPad OSの検証
export const CanvasMaxSize = {
  Desktop: {
    Chrome: {
      '73+': {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: powersOfTwo[28]
      },
      '72-': {
        width: powersOfTwo[15] - 1,
        height: powersOfTwo[15] - 1,
        pixels: powersOfTwo[28]
      }
    },
    Edge: {
      '80+': {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: powersOfTwo[28]
      },
      '13-': {
        width: powersOfTwo[14],
        height: powersOfTwo[14],
        pixels: powersOfTwo[28]
      }
    },
    Firefox: {
      width: powersOfTwo[15] - 1,
      height: powersOfTwo[15] - 1,
      pixels: 124992400
    },
    Safari: {
      width: powersOfTwo[22] - 1,
      height: powersOfTwo[23] - 1,
      pixels: powersOfTwo[28]
    },
    other: {
      width: powersOfTwo[13],
      height: powersOfTwo[13],
      pixels: powersOfTwo[26]
    }
  },
  iOS: {
    width: powersOfTwo[22] - 1,
    height: powersOfTwo[23] - 1,
    pixels: powersOfTwo[24]
  },
  Android: {
    91: {
      '8+': {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: powersOfTwo[28]
      },
      7: {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: powersOfTwo[4] * 3547 * 3547 // 201299344
      },
      6: {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: powersOfTwo[28]
      },
      5: {
        width: powersOfTwo[16] - 1,
        height: powersOfTwo[16] - 1,
        pixels: 124992400
      }
    },
    68: {
      '7+': {
        width: powersOfTwo[15] - 1,
        height: powersOfTwo[15] - 1,
        pixels: powersOfTwo[4] * 3547 * 3547 // 201299344
      },
      6: {
        width: powersOfTwo[15] - 1,
        height: powersOfTwo[15] - 1,
        pixels: 117418896
      },
      5: {
        width: powersOfTwo[15] - 1,
        height: powersOfTwo[15] - 1,
        pixels: 130005604
      }
    },
    other: {
      width: powersOfTwo[13],
      height: powersOfTwo[13],
      pixels: powersOfTwo[26]
    }
  },
  other: {
    width: powersOfTwo[13],
    height: powersOfTwo[13],
    pixels: powersOfTwo[26]
  }
}
