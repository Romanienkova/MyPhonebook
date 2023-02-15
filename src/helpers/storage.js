const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    // console.log(serializedState);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    // console.log(serializedState);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = key => {
  try {
    const serializedState = localStorage.removeItem(key);
    return serializedState;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

// const storage = {
//   save,
//   load,
//   remove,
// };
// export default storage;

export default Object.assign(
  {},
  {
    save,
    load,
    remove,
  }
);
