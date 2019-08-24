import React, { Component } from "react";
import "./style.css";
import {
  Button,
  Container,
  Header,
  Icon,
  Item,
  Label,
  Divider,
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  citiesData
} from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({}, citiesData), dispatch),
});

class CityCard extends Component {
  componentWillMount() {
    this.props.citiesDataStart({});
  }

  historyPush = (push) => this.props.history.push(push);

  render() {

    const cities = this.props.citiesData;
    let _items = '';
    if(cities) {
      _items = cities.map((items, index) => {
         return (
           <Item key={index}>
             <Item.Image src={items.pic} />
             <Item.Content>
               <Item.Header as='a'>{items.name}</Item.Header>
               <Item.Meta>
                 <span>{items.province}, </span>
                 <span>{items.country}</span>
               </Item.Meta>
               <Item.Description>
                 {items.desc}
               </Item.Description>
               <Item.Extra>
                 <Button floated='right' onClick={(event) => this.historyPush(items.url)} primary>
                   weather
                   <Icon name='chevron right' />
                 </Button>
                 <Label>Limited</Label>
               </Item.Extra>
             </Item.Content>
           </Item>
         )
       })
    }
    return (
      <div data-test="citycardComponent">
        <Divider hidden/>
        <Header as='h3' content='List of cities' className='h3' textAlign='center' />
        <Container style={{ minHeight: 450, padding: '1em 0em' }}>
          <Item.Group divided>
          {_items}
          </Item.Group>
        </Container>
        <Divider hidden/>
      </div>
    );
  }
}

CityCard.propTypes = {
  citiesData: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  return {
    citiesData: state.cities.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
