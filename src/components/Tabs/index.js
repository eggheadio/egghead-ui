import React, {Component, PropTypes} from 'react'
import {
  Tab as LibraryTab,
  Tabs as LibraryTabs,
  TabList as LibraryTabList,
  TabPanel as LibraryTabPanel,
} from 'react-tabs';
LibraryTabs.setUseDefaultStyles(false)
import {map} from 'lodash'

export default class Tabs extends Component {

  static propTypes = {
    groups: PropTypes.arrayOf(React.PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })).isRequired,
  }

  state = {
    selected: 0,
  }

  handleSelect = (index) => (
    this.setState({
      selected: index,
    })
  )

  render() {
    const {groups} = this.props

    return (
      <LibraryTabs onSelect={this.handleSelect}>

        <LibraryTabList className='list pa0 ma0 bg-moon-gray flex-ns br2 br--top'>
          {map(groups, (group, index) => (
            <LibraryTab
              key={index}
              className={`
                f6
                pv3 ph4 ph3-ns
                ttu
                pointer
                bl bl-0-ns bb-ns bw2 bw1-ns
                ${this.state.selected === index
                  ? 'b--orange black'
                  : 'b--transparent black-40'
                }
              `}
            >
              {group.title}
            </LibraryTab>
          ))}
        </LibraryTabList>

        {map(groups, (group, index) => (
          <LibraryTabPanel 
            key={index}
            className='pa3'
          >
            {group.component}
          </LibraryTabPanel>
        ))}  

      </LibraryTabs>
    )
  }
}
