let componentList = [
  'button',
  'cards',
  'dropdown',
  'inputs',
  'modal',
  'navbars',
  'notifications',
  'progress',
  'radio',
  'select',
  'tables',
];
export default function (componentEntries) {
  let sideItems = [];
  const menus = {
    components: {
      title: 'Components',
      collapsable: false,
      children: []
    }
  };

  componentList.forEach(component => {
    menus.components.children.push(`/component-docs/${component}`)
  });

  for (let menu in menus) {
    if (menus[menu].children.length > 0) {
      sideItems.push(menus[menu]);
    }
  }

  return sideItems;
}
