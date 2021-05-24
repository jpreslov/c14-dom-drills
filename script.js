document.addEventListener('DOMContentLoaded', function () {
  //container will hold all elements
  let container = document.createElement('div');
  container.className = 'header-container';
  document.body.appendChild(container);
  let liBtn = document.getElementsByClassName('li-btn')[0];

  let h1 = document.createElement('h1');
  h1.className = 'h1';
  let h1Text = document.createTextNode('This is an h1');
  //parent.appendChild(child)
  h1.appendChild(h1Text);
  container.appendChild(h1);

  let h2 = document.createElement('h2');
  h2.className = 'h2';
  let h2Text = document.createTextNode('This is an h2');
  h2.appendChild(h2Text);
  container.appendChild(h2);

  let h3 = document.createElement('h3');
  h3.className = 'h3';
  let h3Text = document.createTextNode('This is an h3');
  h3.appendChild(h3Text);
  container.appendChild(h3);

  let h4 = document.createElement('h4');
  h4.className = 'h4';
  let h4Text = document.createTextNode('This is an h4');
  h4.appendChild(h4Text);
  container.appendChild(h4);

  let h5 = document.createElement('h5');
  h5.className = 'h5';
  let h5Text = document.createTextNode('This is an h5');
  h5.appendChild(h5Text);
  container.appendChild(h5);

  let h6 = document.createElement('h6');
  h6.className = 'h6';
  let h6Text = document.createTextNode('This is an h6');
  h6.appendChild(h6Text);
  container.appendChild(h6);

  let colorsArr = ['blue', 'green', 'pink', 'orange', 'turquoise', 'violet', 'red', 'brown'];

  let headings = [h1, h2, h3, h4, h5, h6];

  //alternative to adding event listener 6 times
  for (i = 0; i < headings.length; i++) {
    //had to set headings[i] to variable bc it didn't work in event listener
    let heading = headings[i];
    heading.addEventListener('dblclick', function () {
      heading.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    });
  }

  let liCtr = 1;

  liBtn.addEventListener('click', function () {
    //li needs to be redefined every time, so we put it in here bc scope
    let li = document.createElement('li');
    //template literal
    let liText = document.createTextNode(`This is list item ${liCtr}`);
    //adding text to every list item
    li.appendChild(liText);
    //appending li to container instead of directly to document.body
    container.appendChild(li);
    liCtr++;

    li.addEventListener('click', function () {
      li.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    });

    li.addEventListener('dblclick', function () {
      li.remove();
      // li.style.visibility = "hidden"
    });
  });
});
