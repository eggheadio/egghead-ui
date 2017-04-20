import React, {Component} from 'react'
import Paragraph from 'package/components/Paragraph'

export default class extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.wistiaId !== nextProps.wistiaId 
  }

  render() {
    const {wistiaId} = this.props
    return wistiaId
      ? <div className='aspect-ratio aspect-ratio--16x9'>
          <div className='aspect-ratio--object'>
            <iframe
              ref={(iframe) => {
                if (iframe) {
                  iframe.contentWindow.location.replace(`//fast.wistia.net/embed/iframe/${wistiaId}?videoFoam=true`)
                }
              }}
              width='100%'
              height='100%'
              frameBorder='0'
              scrolling='no'
              allowTransparency
              allowFullScreen
            />
          </div>
        </div>
      : <Paragraph>
          There is no video to show - waiting for one to be uploaded.
        </Paragraph>
  }
}
