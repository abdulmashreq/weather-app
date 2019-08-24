export const icon = {
  1: 'February',
  2: 'wi-cloudy',
  3: 'wi-night-partly-cloudy',
  4: 'wi-cloud-up',
  5: 'wi-day-cloudy-high',
  6: 'wi-day-cloudy-high',
  7: 'wi-day-cloudy-high',
  8: 'wi-day-sunny-overcast',
  9: 'wi-day-cloudy-high',
  10: 'wi-day-cloudy-high',
  11: 'wi-day-cloudy-high'
};

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
