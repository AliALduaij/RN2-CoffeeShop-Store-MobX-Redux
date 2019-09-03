import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem
          navigation={this.navigation}
          coffeeShop={coffeeShop}
          key={coffeeShop.id}
        />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default CoffeeList;
