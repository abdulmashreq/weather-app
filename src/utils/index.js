export const icon = (code) => {
  // eslint-disable-next-line
  switch (parseInt(code)) {
    case 2:
      return 'wi-cloudy';
    case 3:
      return 'wi-night-partly-cloudy';
    case 4:
    case 19:
      return 'wi-cloud-up';
    case 8:
      return 'wi-day-sunny-overcast';
    case 18:
      return 'wi-night-clear';
    default:
      return 'wi-day-cloudy-high';
  }
};

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
