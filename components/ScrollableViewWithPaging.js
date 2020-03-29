import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Dimensions, Button, Text } from 'react-native';
const { width, height } = Dimensions.get('window');

// horizontal= {true}
// decelerationRate={0}
// snapToInterval={width - 60}
// snapToAlignment={"center"}
export default function ScrollableViewWithPaging() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#000000"}}>
            <CreationHeader/>
            <View style={{flex: 8}}>
            <ScrollView
                horizontal={layout.scrollView.horizontal}
                decelerationRate={layout.scrollView.decelerationRate}
                snapToInterval={layout.scrollView.snapToInterval}
                snapToAlignment={layout.scrollView.snapToAlignment}
                style={{flex: 8, backgroundColor: "#000000"}}
                // contentContainerStyle={{flex: 1}}
            >
                <View style={styles.view} />
            </ScrollView>
            </View>
            <CreationPageBottomComponent/>
        </SafeAreaView>
    ); 
}

function CreationHeader() {
    return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#00aa00'}}>
            <Button
                title='Preview'
                onPress={() => console.log('preview button press')}
            />
            <CreationTitleView/>
            <Button
                title='close'
                onPress={() => console.log('preview button press')}
            />
        </View>
    );
}

function CreationTitleView() {
    return (
        <View>
            <Text style={{textAlign: 'center'}}>Create Recipe</Text>
            <Text style={{textAlign: 'center'}}>sub</Text>
        </View>
    );
}

function CreationPageBottomComponent() {
    return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#00aa00'}}>
            <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'red'}}></View>
            <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'red'}}></View>
            <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'red'}}></View>
            <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'red'}}></View>
            <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'red'}}></View>
        </View>
    );
}

const layout = {
    scrollView: {        
        horizontal: true,
        decelerationRate: 'fast',
        snapToInterval: width,
        snapToAlignment: 'left',
        contentInset: {
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
        }
    },
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: 'blue',
        width: width,
        // margin: 10,
        height: height,
        // borderRadius: 10,
        //paddingHorizontal : 30
    },
    view2: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: 'red',
        width: width,
        // margin: 0,
        height: height,
        // borderRadius: 10,
        //paddingHorizontal : 30
    },
})