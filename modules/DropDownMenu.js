export default (dropDownMenu) => {
  let _header = dropDownMenu[0];
  let _options = dropDownMenu.slice(1);

  return {
    get header() {
      return _header;
    },
    set header(value) {
      _header = value;
    },
    get options() {
      return _options;
    },
    set options(array) {
      _options = array;
    },
    checkIfOptionExists(option) {
      for (let i = 0; i < _options.length; i++) {
        if (_options[i].title === option.title) {
          return true;
        }
      }
      return false;
    },
    addOption(option) {
      _options.push(option);
    },
    removeOption(option) {
      for (let i = 0; i < _options.length; i++) {
        if (_options[i].title === option.title) {
          _options.splice(i, 1);
        }
      }
    },
  };
};
