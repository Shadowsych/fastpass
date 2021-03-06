import React from "react";
import {serverURL} from "../../App";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, ScrollView, Text, View, Dimensions,
  Image, TouchableOpacity} from "react-native";

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faceId: "Connecting to server...",
      confidence: "Connecting to server...",
      email: "Connecting to server...",
      aadvantageId: "Connecting to server...",
      firstName: "Connecting to server...",
      lastName: "Connecting to server...",
      gender: "Connecting to server...",
      flightNumber: "Connecting to server...",
      aircraftType: "Connecting to server...",
      origin: "Connecting to server...",
      destination: "Connecting to server...",
      boardingTime: "Connecting to server...",
      departureTime: "Connecting to server...",
      arrivalTime: "Connecting to server...",
      gate: "Connecting to server...",
      seat: "Connecting to server...",
      cost: "Connecting to server..."
    }
  }

  // stack navigator's page settings
  static navigationOptions = {
  	header: null,
    title: "Customer"
  }

  componentWillMount() {
    this.setCustomerData();
  }

  // set the data of the customer
  setCustomerData() {
    // grab the customer's JSON data processed by the server
    let {params} = this.props.navigation.state;
    let data = JSON.parse(params.data);

    // update state
    this.setState({faceId: data.faceId});
    let confidence = (data.confidence * 100) + "%";
    this.setState({confidence: confidence});
    this.setState({email: data.email});
    this.setState({aadvantageId: data.aadvantageId});
    this.setState({firstName: data.firstName});
    this.setState({lastName: data.lastName});
    this.setState({gender: data.gender});
    this.setState({flightNumber: data.flightNumber});
    this.setState({aircraftType: data.aircraftType});
    this.setState({origin: data.origin});
    this.setState({destination: data.destination});
    this.setState({boardingTime: data.boardingTime});
    this.setState({departureTime: data.departureTime});
    this.setState({arrivalTime: data.arrivalTime});
    this.setState({gate: data.gate});
    this.setState({seat: data.seat});
    this.setState({cost: data.cost});
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.faceImage}
            source={{uri: serverURL + "/media/faces/" + this.state.faceId + ".jpg"}}
          />
          <Text style={styles.infoText}>Face Similarity: {this.state.confidence}</Text>
          <Text style={styles.infoText}>Email: {this.state.email}</Text>
          <Text style={styles.infoText}>aaAdvantage Id: {this.state.aadvantageId}</Text>
          <Text style={styles.infoText}>First Name: {this.state.firstName}</Text>
          <Text style={styles.infoText}>Last Name: {this.state.lastName}</Text>
          <Text style={styles.infoText}>Gender: {this.state.gender}</Text>
          <Text style={styles.infoText}>Flight Number: {this.state.flightNumber}</Text>
          <Text style={styles.infoText}>Aircraft Type: {this.state.aircraftType}</Text>
          <Text style={styles.infoText}>Origin: {this.state.origin}</Text>
          <Text style={styles.infoText}>Destination: {this.state.destination}</Text>
          <Text style={styles.infoText}>Boarding Time: {this.state.boardingTime}</Text>
          <Text style={styles.infoText}>Departure Time: {this.state.departureTime}</Text>
          <Text style={styles.infoText}>Arrival Time: {this.state.arrivalTime}</Text>
          <Text style={styles.infoText}>Gate: {this.state.gate}</Text>
          <Text style={styles.infoText}>Seat: {this.state.seat}</Text>
          <Text style={styles.infoText}>Cost: {this.state.cost}</Text>
        </ScrollView>
      </View>
    );
  }
}

// style sheet for the Home Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  faceImage: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2
  },
  infoText: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: "#8299C4"
  }
});

export default Customer;
