import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products; // with React: ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINATELY has an element with an id of 'dev-product'
// We want to immedtiately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id 'dev-products'
  if (el) {
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-product' exists
// WE DO NOT WANT to try to immediately render the app
export { mount };
