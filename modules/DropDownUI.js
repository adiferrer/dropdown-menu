import '../styles.css';

const renderHeader = (header) => {
  const headerDiv = document.createElement('button');
  headerDiv.className = 'dropdown-header';
  const headerLink = document.createElement('a');
  headerLink.setAttribute('href', header.link);
  headerLink.textContent = header.title;
  headerDiv.appendChild(headerLink);

  return headerDiv;
};

const renderSingleItem = (item) => {
  const linkDiv = document.createElement('a');
  linkDiv.className = 'dropdown-item';
  linkDiv.textContent = item.title;
  linkDiv.setAttribute('href', item.link);

  return linkDiv;
};

const renderDropDownMenu = (menu) => {
  if (menu.options.length === 0) {
    const noSubItems = renderSingleItem(menu.header);
    noSubItems.className = 'no-subitems';
    return noSubItems;
  }

  const dropdownDiv = document.createElement('div');
  dropdownDiv.className = 'dropdown-menu';
  dropdownDiv.setAttribute('id', menu.header.title.replace(/\s+/g, '-').toLowerCase());
  const dropDownHeader = renderHeader(menu.header);
  const menuItems = document.createElement('div');
  menu.options.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(item, 'title')) {
      menuItems.appendChild(renderSingleItem(item));
    } else if (Object.prototype.hasOwnProperty.call(item, 'header')) {
      menuItems.appendChild(renderDropDownMenu(item));
    }
  });
  dropDownHeader.addEventListener('click', () => {
    if (dropdownDiv.classList.contains('show')) {
      dropdownDiv.classList.remove('show');
    } else {
      dropdownDiv.classList.add('show');
    }
  });
  dropdownDiv.appendChild(dropDownHeader);
  dropdownDiv.appendChild(menuItems);

  return dropdownDiv;
};

const renderNav = (menuList) => {
  const menuDiv = document.createElement('nav');
  menuDiv.className = 'dropdown-nav';
  menuList.forEach((menu) => {
    menuDiv.appendChild(renderDropDownMenu(menu));
  });
  const mobileMenu = document.createElement('a');
  mobileMenu.classList.add('icon');
  mobileMenu.setAttribute('href', 'javascript:void(0);');
  mobileMenu.onclick = () => {
    const x = document.querySelector('nav');
    if (x.className === 'dropdown-nav') {
      x.className += ' mobile-down';
    } else {
      x.className = 'dropdown-nav';
    }
  };
  mobileMenu.innerHTML = '&#9776;';
  menuDiv.appendChild(mobileMenu);

  return menuDiv;
};

export {
  renderHeader, renderSingleItem, renderDropDownMenu, renderNav,
};
