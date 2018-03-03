import * as React from 'react';
import {
//     Platform,
    StyleSheet,
    Dimensions,
//     Text,
    View
} from 'react-native';
import MapView from 'react-native-maps';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
const FirstRoute = () => (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
        </MapView>
    </View>
);
const SecondRoute = () => <View style={[stylesTab.container, {backgroundColor: '#673ab7'}]}/>;

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'First'},
            {key: 'second', title: 'Second'},
        ],
    };

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    render() {
        return (
            <TabViewAnimated
                style={stylesTab.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
const stylesTab = StyleSheet.create({
    container: {
        flex: 1,
    },
});
