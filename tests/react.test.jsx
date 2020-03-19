import React from 'react'
import {mount, shallow} from 'enzyme'
// import index from '../client/index'
import ImageCarouselEntry from '../client/ImageCarouselEntry';
import ImageCarouselMain from '../client/ImageCarouselMain';
import ImageCarouselArrows from '../client/ImageCarouselArrows';


describe('ImageCarouselMain', () => {
  const component = shallow(<ImageCarouselMain />);


  it('Has Access to 10 images form resturant 20', () => {
    expect(component.find(ImageCarouselEntry)).toHaveLength(10);
  });
});


describe('Images', () => {
  const {container} = shallow(<ImageCarouselMain />)
  it('Find Ten <img /> tags with blank text', () => {
    expect(container.firstChild.classList.contains('images')).toBe(true);
  });
});