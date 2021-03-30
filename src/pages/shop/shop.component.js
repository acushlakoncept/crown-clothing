import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapshopt = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionSnapshotToMap(snapshot)
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
