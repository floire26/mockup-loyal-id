import { Image, StyleSheet, Text, View } from "react-native"

export default function OutletCard({ imageUrl, name }){
    return <>
        {/* { console.log('render OutletCard')} */}
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.pic}/>
            <Text style={styles.text}>{ name }</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'gray',
        width: 75,
        height: 75,
        margin: 5
    },
    pic: {
        width: 50,
        height: 50,
        marginBottom: 5
    },
    text: {
        fontFamily: 'poppins',
        color: '#425866',
        textTransform: 'uppercase',
        fontSize: 10
    }
})
