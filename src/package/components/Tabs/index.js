import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import {map} from 'lodash'

Tabs.setUseDefaultStyles(false)

class TabsComponent extends Component {

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
      <Tabs onSelect={this.handleSelect}>

        <TabList
          className='list pa0 ma0
                    flex br2 br--top
                    items-center'
          style={{justifyContent: 'inherit'}}>
          {map(groups, (group, index) => (
            <Tab
              key={index}
              className={`
                f6
                pv3 ph4-ns
                flex-grow-1
                flex-grow-0-ns
                tc
                ttu
                pointer
                dim
                b
                bb
                ${this.state.selected === index
                  ? 'b--orange orange'
                  : 'b--transparent dark-gray-secondary'
                }
              `}
              style={{
                borderWidth: 3,
              }}
            >
              {group.title}
            </Tab>
          ))}
        </TabList>

        {map(groups, (group, index) => (
          <TabPanel key={index}>
            {group.component}
          </TabPanel>
        ))}

      </Tabs>
    )
  }
}

TabsComponent.propTypes = {
  groups: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    component: React.PropTypes.node.isRequired,
  })).isRequired,
}

export default TabsComponent
