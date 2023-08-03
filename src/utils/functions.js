export const randomizer = (array) => {
    const randomObject = array.sort((a, b) => 0.5 - Math.random());
    const sliced = randomObject.slice(0, 9)
    return sliced;
  };