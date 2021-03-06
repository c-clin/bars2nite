import React from 'react';
import { mount, shallow } from 'enzyme';
import { App } from '../../App';
import Root from '../../Root';
import Header from '../Header';
import Landing from '../Landing';
import SearchPage from '../SearchPage';

describe('App', () => {
  const mockFetchUser = jest.fn();
  const props = {
    fetchUser: mockFetchUser
  };
  const app = shallow(<App {...props} />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Header component', () => {
    expect(app.find(Header).length).toEqual(1);
    // wrapped.unmount();
  });

  // it('contains a Landing component', () => {
  //   expect(app.find(Landing).length).toEqual(1);
  //   wrapped.unmount();
  // });

  // it('contains a SearchPage component', () => {
  //   console.log(wrapped);
  //   expect(app.find('Connect(SearchPage)').exists()).toBe(true);
  //   wrapped.unmount();
  // });
});
