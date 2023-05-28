import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OutletCard from '../components/OutletCard';
import OffersCard from '../components/OffersCard';
import Carousel from 'react-native-snap-carousel';
import PromoCard, { ITEM_WIDTH, SLIDER_WIDTH } from '../components/PromoCard';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const outlets = [
    {
        id: 1,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 2,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 3,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 4,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 5,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 6,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 7,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Outlet'
    },
    {
        id: 8,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2474/2474161.png',
        name: 'Other'
    }
]

const promos = [
    {
        imageUrl: 'https://assets.keap.com/image/upload/v1/learn/images/Zz1jOTkzNDU4MmVkMTMyZmM2NjMzN2YwZmRiZTk3ZjdhOQ%3D%3D'
    },
    {
        imageUrl: 'https://assets.keap.com/image/upload/v1/learn/images/Zz1jOTkzNDU4MmVkMTMyZmM2NjMzN2YwZmRiZTk3ZjdhOQ%3D%3D'
    },
    {
        imageUrl: 'https://assets.keap.com/image/upload/v1/learn/images/Zz1jOTkzNDU4MmVkMTMyZmM2NjMzN2YwZmRiZTk3ZjdhOQ%3D%3D'
    },
    {
        imageUrl: 'https://assets.keap.com/image/upload/v1/learn/images/Zz1jOTkzNDU4MmVkMTMyZmM2NjMzN2YwZmRiZTk3ZjdhOQ%3D%3D'
    },
    {
        imageUrl: 'https://assets.keap.com/image/upload/v1/learn/images/Zz1jOTkzNDU4MmVkMTMyZmM2NjMzN2YwZmRiZTk3ZjdhOQ%3D%3D'
    },
]

const malls = [{
    label: 'Mal A',
    value: 1,
    icon: () => <Ionicons name="location-sharp" size={30} color="#425866" />
}, {
    label: 'Mal B',
    value: 2,
    icon: () => <Ionicons name="location-sharp" size={30} color="#425866" />
}, {
    label: 'Mal C',
    value: 3,
    icon: () => <Ionicons name="location-sharp" size={30} color="#425866" />
}, {
    label: 'Mal D',
    value: 4,
    icon: () => <Ionicons name="location-sharp" size={30} color="#425866" />
}]

export default function Home() {
    const isCarousel = React.useRef(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(malls);
    const [text, setText] = useState('');
    const handlePress = () => {
        axios.get(`http://192.168.1.103:3000/fb/${text}`) // Server URL from local -> need to be configured
        .then(response => response.data.join(',\n   '))
        .then(output => Alert.alert('API #1 Call Result', `[\n   ${output}\n]`))
        .catch(error => Alert.alert('API #1 Call Error', error.message))
    }

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginVertical: 10,
                marginHorizontal: 10
            }}>
                <Octicons name="three-bars" size={24} color="white" />
                <Text style={{
                    color: 'white',
                    fontFamily: 'poppins',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginHorizontal: 10
                }}>Hi, Guest</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginVertical: 10,
            }}>
                <FontAwesome5 name="charging-station" size={24} color="white" style={{
                    marginHorizontal: 10
                }}/>
                <AntDesign name="heart" size={24} color="white" style={{
                    marginHorizontal: 10
                }}/>
                <MaterialCommunityIcons name="bell" size={24} color="white" style={{
                    marginHorizontal: 10
                }}/>
            </View>
          </View>
          <View style={styles.search}>
            <TouchableOpacity
                onPress={handlePress}>
                <FontAwesome5 name="search" size={24} color="white"/>
            </TouchableOpacity>
            <TextInput
                onChangeText={setText}
                style={styles.input}
                placeholder="Masukkan angka..."
                keyboardType='numeric'/>
          </View>
          <View style={styles.profile}>
            <FontAwesome5 name="credit-card" size={50} color="white" style={{
                paddingHorizontal: 5
            }}/>
            <View style={styles.profileCard}>
                <FontAwesome5 name="wallet" size={40} color="#0da28f" />
                <Text style={styles.textProfile}>Wallet</Text>
            </View>
            <View style={styles.profileCard}>
            <FontAwesome5 name="receipt" size={40} color="#edab48" />
                <Text style={styles.textProfile}>Earning</Text>
            </View>
            <View style={styles.profileCard}>
                <AntDesign name="qrcode" size={40} color="#1f92c9" />
                <Text style={styles.textProfile}>Scan QR</Text>
            </View>
          </View>
          <View style={styles.content}>
            <ScrollView style={{
                marginBottom: 50
            }}>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    <Image
                        source={{uri: 'https://img.freepik.com/free-vector/shopping-mall-outside-composition-mall-building-with-tags-headlines-shops-wall_1284-58788.jpg' }}
                        style={styles.mallPic}
                        />
                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#d3dce3',
                        position: 'absolute',
                        flexDirection: 'row',
                        top: 20,
                        right: 20,
                        width: 100,
                        borderBottomLeftRadius: 24,
                        borderTopRightRadius: 24,
                        justifyContent: 'space-evenly',
                        padding: 10
                    }}>
                        <FontAwesome name="phone" size={30} color="#c11c56"/>
                        <Feather name="map" size={30} color="#c11c56" />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            width: 200,
                            alignSelf: 'center',
                            zIndex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder='Select a Mall'
                            textStyle={{
                                fontFamily: 'poppins',
                                color: '#425866'
                            }}
                        />
                    </View>
                </View>
                <View style={styles.outletsSection}>
                    <View style={styles.outletRow}>
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                    </View>
                    <View style={styles.outletRow}>
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[0].imageUrl} name={outlets[0].name} />
                        <OutletCard imageUrl={outlets[7].imageUrl} name={outlets[7].name} />
                    </View>
                </View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.textSection}>Special Offers</Text>
                    <Text style={styles.textViewAll}>View all</Text>
                </View>
                <View style={styles.offersSection}>
                    <OffersCard imageUrl={'https://www.warlordgames.com/wp-content/uploads/2012/09/special-offer-placeholder.jpeg'} />
                    <OffersCard imageUrl={'https://www.warlordgames.com/wp-content/uploads/2012/09/special-offer-placeholder.jpeg'} />
                    <OffersCard imageUrl={'https://www.warlordgames.com/wp-content/uploads/2012/09/special-offer-placeholder.jpeg'} />
                </View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.textSection}>Promo highlight</Text>
                </View >
                <View style={styles.promoSection}>
                    <Carousel
                        layout='default'
                        ref={isCarousel}
                        data={promos}
                        renderItem={PromoCard}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        firstItem={3}
                    />
                </View>
            </ScrollView>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      zIndex: -1
    },
    header: {
      flex: 2,
      backgroundColor: '#c11c56',
      alignItems: 'center',
      flexDirection: 'row',
    },
    search: {
        flex: 2,
        backgroundColor: '#c11c56',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
        zIndex: -1
    },
    profile: {
      flex: 3,
      flexDirection: 'row',
      backgroundColor: '#c11c56',
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 25,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    content: {
      flex: 12,
      backgroundColor: '#fff'
    },
    input: {
        fontFamily: 'poppins',
        fontWeight: '100',
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 12,
        marginLeft: 10
    },
    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 24,
        width: 75,
        height: 75,
        marginHorizontal: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mallPic: {
        margin: 20,
        height: 200,
        borderRadius: 25
    },
    outletsSection: {
        margin: 20,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: 'gray',
        flexDirection: 'column',
        borderWidth: 1,
        zIndex: -1
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    offersSection: {
        margin: 20,
        height: 120,
        borderRadius: 25,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    promoSection: {
        margin: 20,
        height: 300,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outletRow: {
        flexDirection: 'row'
    },
    textSection: {
        fontFamily: 'poppins',
        color: '#425866',
        fontSize: 18
    },
    textProfile: {
        fontFamily: 'poppins',
        color: '#c11c56'
    },
    textViewAll: {
        fontFamily: 'poppins',
        color: '#c11c56',
        fontSize: 13,
        alignSelf: 'center'
    }
});
