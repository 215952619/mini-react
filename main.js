const root = document.getElementById('root');

const appDom = {
  type: 'div',
  props: {
    id: 'app',
  },
};

const textNodeDom = {
  type: 'TEXT',
  props: {
    textContent: 'app',
    children: [],
  },
};

const app = document.createElement(appDom.type);
app.id = appDom.props.id;

const textNode = document.createTextNode('');
textNode.textContent = textNodeDom.props.textContent;

app.appendChild(textNode);
root.appendChild(app);
