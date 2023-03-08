import { Component } from "react"
import { Text, TextInput, View, Button, StyleSheet } from "react-native"


export default class Counter extends Component{

    state = {
        count : 0,
        step: 2,
    };
    Incrementar() {
        this.setState({
            count: this.state.count + this.state.step,
        });
    }
    Decrementar() {
        if (this.state.count > this.props.min){
        this.setState({
            count: this.state.count - 1,
        });
    } 
    }
    alteraStep(text) {
        this.setState({step : parseInt(text)});
    }


    render() {
        return(
            <View>
                <TextInput value={this.state.step.toString()}
                onChange={(e) => {this.alteraStep(e.nativeEvent.text);}}
                />
                <TextInput 
                defaultValue={this.state.step.toString()}
                onChangeText={(valor) => {this.alteraStep(valor);}}
                
                />
                <Text>
                    Contador: {this.state.count}
                </Text>
                <Button onPress={() =>this.Incrementar()} title="+"/>
                <Button onPress={() =>this.Decrementar()} title="-"/>
            </View>
            
        );
    }
        
}
    


