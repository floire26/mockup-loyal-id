import { Image, StyleSheet, Dimensions } from "react-native"

export default function PromoCard({ item, index }) {
    return <>
        {/* { console.log('render OutletCard')} */}
        <Image source={{ uri: item.imageUrl }} style={styles.pic} key={ index }/>
    </>
}

export const SLIDER_WIDTH = Dimensions.get('window').width + 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const styles = StyleSheet.create({
    pic: {
        width: 250,
        height: 300,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white',
        marginRight: 10
    }
})
