import { Component } from "react"
import { Text, View, Button, StyleSheet } from "react-native"


export default class Counter extends Component{

    state = {
        count : 0,
    };
    Incrementar() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    Decrementar() {
        if (this.state.count > this.props.min){
        this.setState({
            count: this.state.count - 1,
        });
    } 
    }


    render() {
        return(
            <View>
                <Text>
                    Contador: {this.state.count}
                </Text>
                <Button onPress={() =>this.Incrementar()} title="+"/>
                <Button onPress={() =>this.Decrementar()} title="-"/>
            </View>
            
        );
    }
        
}
    


