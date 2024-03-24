const root = document.getElementById('root');

const createTextNode = (text) => {
  return {
    type: 'TEXT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const createElementNode = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
};

const render = (container, vNode) => {
  const el =
    vNode.type === 'TEXT'
      ? document.createTextNode(vNode)
      : document.createElement(vNode.type);
  const { children, ...props } = vNode.props;
  Object.keys(props).map((key) => {
    el[key] = props[key];
  });
  children.map((child) => render(el, child));
  container.append(el);
};

const Text = createTextNode('app');
const App = createElementNode('div', { id: 'app' }, Text);

render(root, App);
