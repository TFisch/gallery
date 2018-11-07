import { shallowMount } from '@vue/test-utils';
import Card from './../../../src/components/Card/Card';

describe('Card.vue', () => {
  let wrapper;
  let mockPainting;

  it('should match th snapshot', () => {
    mockPainting = { image: 'google.com' };
    wrapper = shallowMount(Card, {
      propsData: {
        painting: mockPainting
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
