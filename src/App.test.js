import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';


it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Fetches the API properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 