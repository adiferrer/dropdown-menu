export default (dropDownMenus) => {
  let _dropDownMenus = dropDownMenus;

  return {
    get dropDownMenus() {
      return _dropDownMenus;
    },
    set dropDownMenus(array) {
      _dropDownMenus = array;
    },
    checkIfDropDownMenuExists(dropDownMenu) {
      for (let i = 0; i < _dropDownMenus.length; i++) {
        if (_dropDownMenus[i].header.title === dropDownMenu.header.title) {
          return true;
        }
      }
      return false;
    },
    addDropDownMenu(dropDownMenu) {
      _dropDownMenus.push(dropDownMenu);
    },
    removeDropDownMenu(dropDownMenu) {
      for (let i = 0; i < _dropDownMenus.length; i++) {
        if (_dropDownMenus[i].header.title === dropDownMenu.header.title) {
          _dropDownMenus.splice(i, 1);
        }
      }
    },
  };
};
