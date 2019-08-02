import { Card, extra } from 'semantic-ui-react'

export default Profile = (props) => 
  { email, phone } = props;
  <div className='chatProfile'>
    <Card
      image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      header={email}
      description={phone}
      extra={extra}
    />
  </div>