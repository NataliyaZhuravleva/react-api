import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall, makeNextApiCall } from './../actions';


class Headlines extends React.Component {
  constructor(props) {
    super(props);
    };
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
    dispatch(makeNextApiCall(this.props));
    
  }

  render() {
    const { error, isLoading, headlines } = this.props;
    if (error) {
    
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
       
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {console.log(headlines)}
            {headlines.map((headline, index) =>
              <li key={index}>
       
                <h3> {headline.properties.name}</h3>
                  <p>{headline.properties.xid}</p>
                  <p>{headline.properties.address.postcode}</p>

                {/* <p>{headline.properties.dist}</p> */}
                {/* "name": "las vegas",
                    "country": "US",
                    "lat": 36.17497,
                    "lon": -115.13722,
                    "population": 623747,
                    "timezone": "America/Los_Angeles", */}
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines);

// "name": "las vegas",
//     "country": "US",
//     "lat": 36.17497,
//     "lon": -115.13722,
    