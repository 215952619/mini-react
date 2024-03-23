const root = document.getElementById('root');

const app = document.createElement('div');
app.id = 'app';

const textNode = document.createTextNode('');
textNode.textContent = 'app';

app.appendChild(textNode);
root.appendChild(app);
