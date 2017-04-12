import React, {PropTypes} from 'react'
import Maybe from '../Maybe'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Card from '../Card'

const TitleCard = ({
  children, 
  title, 
  description, 
  intro,
  subtle,
}) => (
  <section className={`br2 ${subtle ? 'ba b--gray-secondary' : 'bg-white-secondary shadow-1'}`}>
    <div className='pa4'>
      <Heading level='5'>
        {title}
      </Heading>
      <Maybe condition={Boolean(description)}>
        <Paragraph type='small'>
          <span>{description}</span>
        </Paragraph>
      </Maybe>
      <Maybe condition={Boolean(intro)}>
        <div>
          {intro}
        </div>
      </Maybe>
    </div>
    {subtle
      ? <div className='bt b--gray-secondary'>
          {children}
        </div>
      : <Card>
          {children}
        </Card>
    }
  </section>
)

TitleCard.propTypes = {
  children: PropTypes.node.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string, 
  intro: PropTypes.node,
  subtle: PropTypes.bool,
}

TitleCard.defaultProps = {
  description: null, 
  intro: null,
  subtle: false,
}

export default TitleCard
