import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Dimensions, Button, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const properties = {
    scrollView: {        
        horizontal: true,
        decelerationRate: 'fast',
        snapToInterval: width,
        snapToAlignment: 'left',
    },
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: 'black'
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        marginLeft: 10,
        marginRight: 10,
    },
    topViewTitle: {
        textAlign: 'center', 
        color: '#eeeeee', 
        fontSize: 18, 
        fontWeight: 'bold',
    },
    topViewSubtitle: {
        textAlign: 'center', 
        color: '#eeeeee', 
        fontSize: 14,
    },
    scrollView: {
        flex: 7.5,
        backgroundColor: 'black',
    },
    view: {
        flex: 1,
        backgroundColor: 'blue',
        width: width,
        height: height,
    },
    view2: {
        flex: 1,
        backgroundColor: 'red',
        width: width,
        height: height,
    },
    bottomView: {
        flex: 1.5, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: 'black'
    },
    circleView: {
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        borderWidth: 1, 
        borderColor: '#eeeeee', 
        justifyContent: 'center',
    },
    circleViewText: {
        fontSize: 12, 
        textAlign: 'center', 
        color: '#eeeeee'
    }
})


export default function CreateRecipeView() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <TopView/>
            <MiddleView/>
            <BottomView/>
        </SafeAreaView>
    ); 
}

function TopView() {
    return (
        <View style={styles.topView}>
            <Button
                title='Preview'
                onPress={() => console.log('preview button press')}
            />
            <TitleView/>
            <Button
                title='close'
                onPress={() => console.log('preview button press')}
            />
        </View>
    );
}

function TitleView() {
    return (
        <View>
            <Text style = {styles.topViewTitle}>Create Recipe</Text>
            <Text style = {styles.topViewSubtitle}>Overview</Text>
        </View>
    );
}

function MiddleView() {
    return (
        <View style={{flex: 8}}>
            <ScrollView
                horizontal = {properties.scrollView.horizontal}
                decelerationRate = {properties.scrollView.decelerationRate}
                snapToInterval = {properties.scrollView.snapToInterval}
                snapToAlignment = {properties.scrollView.snapToAlignment}
                style = {styles.scrollView}
            >
                <View style = {styles.view}/>
                <View style = {styles.view2}/>
            </ScrollView>
        </View>
    );
}

function BottomView() {
    return (
        <View style={styles.bottomView}>
            <CircleView name = 'Overview'/>
            <CircleView name = 'Duration'/>
            <CircleView name = 'Ingredients'/>
            <CircleView name = 'Steps'/>
            <CircleView name = 'Category'/>
        </View>
    );
}

function CircleView(props) {
    return (
        <View style = {styles.circleView}>
            <Text style= {styles.circleViewText}>{props.name}</Text>
        </View>
    );
}