import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Header from './../../../src/components/Header/Header';

describe('Header.vue', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallowMount(Header, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the page title', () => {
    const text = 'Japanese Paintings';
    wrapper = shallowMount(Header, {});
    expect(wrapper.text()).toBe(text);
  });
});
