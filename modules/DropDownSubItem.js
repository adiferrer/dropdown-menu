export default (title, link) => {
  let _title = title;
  let _link = link;

  return {
    get title() {
      return _title;
    },
    set title(value) {
      _title = value;
    },
    get link() {
      return _link;
    },
    set link(value) {
      _link = value;
    },
  };
};
