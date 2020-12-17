export const angleToPoints = (angle: number) => {
  const segment = Math.floor((angle / Math.PI) * 2) + 2;
  const diagonal = ((1 / 2) * segment + 1 / 4) * Math.PI;
  const op = Math.cos(Math.abs(diagonal - angle)) * Math.sqrt(2);
  const x = op * Math.cos(angle);
  const y = op * Math.sin(angle);

  return {
    end: {
      x: x >= 0 ? x : x + 1,
      y: y >= 0 ? y : y + 1,
    },
    start: {
      x: x < 0 ? 1 : 0,
      y: y < 0 ? 1 : 0,
    },
  };
};

const getAlphaFromRgba = (hex: string) => {
  const alpha = "0x" + hex[7] + hex[8];
  return Number((Number(alpha) / 255).toFixed(1));
};

export const getRGBAndOpacityFromRGBA = (color: string) => {
  if (color.length !== 9) {
    return {
      color: color,
      opacity: 1,
    };
  }

  const rgba = getAlphaFromRgba(color);
  return {
    color: color.slice(0, 7),
    opacity: rgba,
  };
};
