import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import TRAVEL_DATA from "../../redux/travel-packages/travel-packages.data.js";

import "./explore-destinations.styles.scss";
class ExploreDestinations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: TRAVEL_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ExploreDestinations;
