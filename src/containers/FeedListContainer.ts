import {connect} from 'react-redux';
import {fetchFeeds, addFeed} from '../store/actions';
import FeedList from '../components/FeedList';

interface StateProps {
  feeds: any
}

interface DispatchProps {
  fetchFeeds: any,
  addFeed: any
}

const mapStateToProps = (state: any) => {
  return {
    feeds: state.feeds,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFeeds: () => {
      dispatch(fetchFeeds());
    },
    addFeed: (id: Number, description: String, price: String, authorId: Number) => {
      dispatch(addFeed(id, description, price, authorId));
    },
  };
};

const FeedListContainer = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(FeedList);

export default FeedListContainer;