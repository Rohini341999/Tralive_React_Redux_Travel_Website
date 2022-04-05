import React from 'react';

import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  console.log(item, 'item in collection item');
  const {
    Destination,
    Itinerary,
    Travel_Date,
    Start_City,
    Airline,
    Per_Person_Price,
    Price_Per_Two_Persons,
    Image_Url,
    Package_Type,
  } = item;
  const history = useHistory();
  return (
    <div
      className='collection-item'
      onClick={() => {
        history.push(`/moreInfo`);
      }}
    >
      <div className='special-event-offer-tag'>
        <p className='special-offer'>
          {Package_Type === 'Deluxe' ? (
            <span>
              Special Offer
              <span className='deluxe-offer'>-{Package_Type}</span>
            </span>
          ) : (
            Package_Type
          )}
          &nbsp;Package
        </p>
      </div>
      <div
        className='image'
        style={{
          backgroundImage: `url(${Image_Url})`,
        }}
      />
      <div className='collection-body-parent'>
        <div className='collection-body'>
          <span className='destination'>Destination : {Destination}</span>
        </div>
        <div className='collection-footer'>
          <span className='itinerary'>Route : {Itinerary}</span>
        </div>
        <div className='collection-footer'>
          <span className='travel-date'>Travel date : {Travel_Date}</span>
          <span className='start-city'>Start City : {Start_City}</span>
        </div>
        <div className='collection-footer'>
          <span className='travel-date'>
            Price per person : &#8377;{Per_Person_Price}
          </span>
          <span className='start-city'>
            Price per two persons : &#8377;{Price_Per_Two_Persons}
          </span>
        </div>
        <div className='collection-footer'>
          <span className='airline'>Airline : {Airline}</span>
          <CustomButton onClick={() => addItem(item)} inverted>
            Book Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
