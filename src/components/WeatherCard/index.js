import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { icon } from '../../utils'
import "./style.css";
import "./icon.css";
import {
  Container,
  Item,
  Divider,
} from 'semantic-ui-react'

import {
  weatherData
} from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({}, weatherData), dispatch),
});


class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: {},
    };
  }

  componentDidMount() {
    this.props.weatherDataStart({city: this.props.city});
  }

  render() {

    const weather = this.props.weatherData.data
    const temperature = weather ? weather.temperature : '';
    const condition = weather ? weather.wxcondition : '';
    const unit = weather ? weather.temperature_unit : '';
    const _icon = weather ? weather.icon : '11';
    const updatetime = weather ? weather.updatetime : '';
    const feels_like = weather ? weather.feels_like : '';
    const city = weather ? weather.city : {};

    return (
      <div>
        <Divider hidden />
        <Container style={{ minHeight: 500, padding: '1em 0em' }} data-test="weathercardComponent">
          <Item.Group divided>
            <Item>
              <Item.Image src={city.pic} />
              <Item.Content>
                <Item.Header as='a'>{city.name}</Item.Header>
                <Item.Meta>
                  <span>{city.province}, </span>
                  <span>{city.country}</span>
                </Item.Meta>
                <Item.Meta>
                  {updatetime}
                </Item.Meta>
                <Item.Meta data-test="iconTag">
                  <i className={'wi '+icon[_icon]} />
                  {condition}
                </Item.Meta>
                <Item.Meta data-test="temperatureTag">
                  Temperature: {temperature} {unit}°
                </Item.Meta>
                <Item.Meta>
                  Feels Like: {feels_like} {unit}°
                </Item.Meta>
                <Item.Description>
                  {city.desc}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
        <Divider hidden/>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  weatherData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  city: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    weatherData: state.weather,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
