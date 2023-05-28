import { Image, StyleSheet } from "react-native"

export default function OffersCard({ imageUrl }){
    return <>
        <Image source={{ uri: imageUrl }} style={styles.pic}/>
    </>
}

const styles = StyleSheet.create({
    pic: {
        width: 50,
        height: 50,
        marginBottom: 5,
        borderRadius: 24,
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white',
        marginRight: 10
    }
})
