// get navbar
navbar = document.getElementById("navbar");
navbar.className = 'navbar';

// add home link
a = document.createElement('a');
a.href = '/index.html';
a.innerHTML = 'Home';
navbar.append(a);

// add link group
div = document.createElement('div');
div.className = 'flex';
div.id = 'group';
navbar.append(div);

// get group tag
group = document.getElementById('group');

links = ['form']

// add links
links.forEach(element => {
  a = document.createElement('a');
  a.href = '/' + element + '.html';
  a.innerHTML = element;
  group.append(a);
});