import React from 'react'
import {mount, shallow} from 'enzyme'
import ImageCarouselEntry from '../client/ImageCarouselEntry.jsx';
import ImageCarouselMain from '../client/ImageCarouselMain.jsx';



describe(ImageCarouselMain, () => {
  it('Has Access to 10 images form resturant 20', () => {
    const wrapper = shallow(<ImageCarouselMain />); 
    expect(wrapper.length).toHaveLength(10)
  });
});
