import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={ CollectionsOverviewContainer }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={ CollectionPageContainer }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);