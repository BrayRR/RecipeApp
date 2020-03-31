import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Dimensions, Button, Text, TouchableHighlight, ShadowPropTypesIOS } from 'react-native';

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

const subtitles = ['Overview', 'Duration', 'Ingredients', 'Steps', 'Category'];

export default function CreateRecipeView() {
    const [subtitleText, setSubtitleText] = useState('Overview');

    return (
        <SafeAreaView style = {styles.safeArea}>
            <TopView subtitleText = {subtitleText}/>
            <MiddleView setSubtitleText = {setSubtitleText}/>
        </SafeAreaView>
    ); 
}

function TopView(props) {
    return (
        <View style = {styles.topView}>
            <Button
                title = 'Preview'
                onPress = {() => console.log('preview button press')}
            />
            <View>
                <Text style = {styles.topViewTitle}>Create Recipe</Text>
                <Text style = {styles.topViewSubtitle}>{props.subtitleText}</Text>
            </View>
            <Button
                title = 'Close'
                onPress = {() => console.log('preview button press')}
            />
        </View>
    );
}

function MiddleView(props) {
    return (
        <View style={{flex: 8}}>
            <ScrollView
             horizontal = {properties.scrollView.horizontal}
             decelerationRate = {properties.scrollView.decelerationRate}
             snapToInterval = {properties.scrollView.snapToInterval}
             snapToAlignment = {properties.scrollView.snapToAlignment}
             style = {styles.scrollView}
             scrollEventThrottle={50}
             onScroll={(event) => {
                const offSet = event.nativeEvent.contentOffset.x;
                const newPage = Math.max(0, Math.floor((offSet + (width / 2)) / width));
                props.setSubtitleText(subtitles[newPage]);
             }}
            >
                <View style = {styles.view}/>
                <View style = {styles.view2}/>
                <View style = {styles.view}/>
                <View style = {styles.view2}/>
                <View style = {styles.view}/>
            </ScrollView>
        </View>
    );
}