import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import App from './App'

const mockStore = configureStore()

describe('App', () => {
  const store = mockStore({
    accounts: {
      accounts: []
    },
    configurationTabs: {
      activeTabIndex: 0
    }
  })

  let Component

  it('renders', () => {
    const wrapper = mount(
      <Provider store={ store }>
        <App/>
      </Provider>
    )

    Component = wrapper.find(App)

    expect(Component.length).toBeTruthy()
  })
})
