import ChatForm from './ChatForm';
import PostCardLists from '../containers/PostCardLists';

class Main extends Component {
  render() {
    return (
      <div>
        <ChatForm/>
        <PostCardLists/>
      </div>
    );
  }
}

export default Main;
