import Vue from 'vue';
import Header from '../../../src/components/Header/Header';
import { mount } from '@vue/test-utils';

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Header);
    expect(wrapper.textContent).toBe('bye!');
  });
});
