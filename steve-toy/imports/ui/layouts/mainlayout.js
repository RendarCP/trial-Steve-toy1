import React from 'react';
import Header from '../components/Header';

export default function Hoc(ContentOne, ContentTwo) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header />>
          <ContentOne />
          {ContentTwo ? <ContentTwo /> : null}
        </div>
      );
    }
  }
}