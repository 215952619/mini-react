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

const Text = createTextNode('app');
const App = createElementNode('div', { id: 'app' }, Text);

const app = document.createElement(App.type);
app.id = App.props.id;

const textNode = document.createTextNode('');
textNode.textContent = Text.props.nodeValue;

app.appendChild(textNode);
root.appendChild(app);
