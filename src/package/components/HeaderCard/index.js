import React, {PropTypes} from 'react'
import Maybe from 'components/Maybe'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Card from 'components/Card'

const HeaderCard = ({
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
      {description
        ? <Paragraph type='small'>
            {description}
          </Paragraph>
        : null
      }
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

HeaderCard.propTypes = {
  children: PropTypes.node.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string, 
  intro: PropTypes.node,
  subtle: PropTypes.bool,
}

HeaderCard.defaultProps = {
  description: null, 
  intro: null,
  subtle: false,
}

export default HeaderCard
