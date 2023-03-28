import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FoodCard from '../FoodCard.vue'

describe('FoodCard', () => {
  it('renders properly', () => {
    const wrapper = mount(FoodCard, { props: { food: {name:"name",  price:400}, selected:true } })
    expect(wrapper.get("[data-test=price]").text()).toBe("₦"+400)
  })
})
 