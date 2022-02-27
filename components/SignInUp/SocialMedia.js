import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageProps,
} from 'react-native'
import propTypes from 'prop-types'

const SocialMedia = ({ image1, image2, image3 }) => {
  return (
    <View style={styles.view1}>
      <TouchableOpacity>
        <Image style={styles.image3} source={image1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image2} source={image2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image1} source={image3} />
      </TouchableOpacity>
    </View>
  )
}
SocialMedia.propTypes = {
  image1: propTypes.any,
  image2: propTypes.any,
  image3: propTypes.any,
}

const styles = StyleSheet.create({
  image1: {
    height: 45,
    width: 45,
    borderRadius: 20,
    marginLeft: 37,
    top: -2,
  },
  image2: {
    height: 40,
    width: 40,
    borderRadius: 20,
    left: 20,
    top: 3,
  },
  image3: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  view1: { flexDirection: 'row', top: 60, left: 70 },
})
export default SocialMedia
