import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text,Image, TouchableOpacity, SafeAreaView,ImageBackground} from 'react-native';

const image = {uri: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/334030700_1388950791895334_6806776241274506609_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGVKp64dkDTdXFTybfRuPpIhfh1depObIWF-HV16k5shdr28C8N0hTWkrO6AxhbcZunZuxlGMSjhKgbnCo8VRMF&_nc_ohc=EZq85CqVWPcAX8iBEPJ&_nc_ht=scontent.fmnl4-6.fna&oh=03_AdSZsGc3Dvd1nPa_RWIPkgKKZZgN_d0gKjd2M5_Tj-zGFw&oe=6423B10F'};
const trackAmbulance = ({navigation}) => {
  
  return (
      <SafeAreaView style = {styles.container}>
        <ImageBackground source={image} style={styles.container}>
        <SafeAreaView style = {styles.navBar}>
          <TouchableOpacity
           onPress={() => navigation.navigate('HomeScreen')}>
            <Image 
              source= {{
                uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAwCAYAAABqkJjhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7Ze9LgRRFIDP7G6ik2gohEbUoiZoNHgBG3qv4QVoFWpPoJXwBJQkJH4LOjphc3w3s3dlNuZOM1lnOV/y5c5mpvj2ZufeuyKO4ziO4/wFVLWFDbEOkRku4Snu4ZhYhsBlvNGcD5wXq3Rjr7XIglikJNZmMFFtvNOfsRVcEWsruPszSMUOPLhVdoOQFYZDnJY0qzw7K/Xzjhd4mWWZJp8Msfq9dP0Wn/iE25raoLi5jvdqh9AyGfsafbEbDEc4JXYILePxQy+Y2AmGAxwVezTjhf3DSx+9YN7EZ4YdfBN7dOJFYYaJPmZo44PYIbS8JJ9QG8taOAk+4hZmsS1LRUu+ccxIml28lfoJG8c5XlVuHBHNt+bXipkY6NacXCX4ZmcMm2LzRSyHWVxLzLQf4GtDh+kvUkSLS14H58Q6RC7iCe5jU4YBQkfEcRzHcZz/zhewYTSBu3U1kQAAAABJRU5ErkJggg=='
              }}
              style={{width: 45, height: 45, marginHorizontal: 12}} 
              />
          </TouchableOpacity>
          <Text style={styles.navText}>Book A Lance</Text>
          <Image source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB7ZcxC4FRFIbPh4mVRRlkM1H4Cywmoz/gX/gh/oLNYjbKYDGRDKLIYLFxvSd9petLEjnqferpds/3Dafb7bxdEUIIIYS8TnC/cc7pvgNbMC42OMMB7AVBcAqLfuNZLHOYFFscYQmNr8JCzPvBwTG8iB20pwXc3Rejrkoe5vxvP0QPcYbTPgghhHyNqHFYhXWxlZxDOMFIdGExKjmnMCO22MstOTdhISZ/StRVqcCGGL8qhBDyWR4eCxiJaSxFsTPjdQSu4fJZcqawjGBZbL2AtKf2s+TUqC+InaYV7bHmFxPeXh+kXdgUW8nZh1shhBBCyJtcAWEVP1n5oyRbAAAAAElFTkSuQmCC'
          }}
          style={styles.hamburgerMenu}/>
        </SafeAreaView> 
          
        <SafeAreaView style = {styles.mapContainer}>
          <SafeAreaView style = {styles.locationInfo}>
            <Text style = {{fontSize: 20, fontStyle: 'bold',fontFamily:'Encode Sans Expanded'}}>Tracking Ambulance: </Text>
            <Text style = {styles.locationInfo}>(Get hospital name)Veterans Memorial Medical Center</Text>
            <Text style = {styles.locationInfo}> To your location(getUserLocation)</Text>
          </SafeAreaView>

          <SafeAreaView style = {styles.locationDisplay}>
            <Image source={{
                uri: 'https://i.imgur.com/kAnZFA5.png'}}
                style={styles.locationImage}/> 
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.continueButtonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.continueButtonText}> Return to Main Menu </Text>
          </TouchableOpacity>
        </SafeAreaView>
        </ImageBackground>  
      </SafeAreaView>
      
      
            
  );
}
export default trackAmbulance;


const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:'column',
    
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  //Header
  navBar:{
    flex: 0.3,
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignItems: 'center',
    alignContent: 'right',
    
    backgroundColor: '#FD5E5E',
    width: '100%',
    height: '8%',

    marginBottom: 10
    
    
  },
  navText: {
    color: '#ffffff',
    textAlign: 'left',

    fontSize: 34,
    fontFamily: 'Port Lligat Sans',
  },

  hamburgerMenu:{
    position: 'absolute',
    right: 16,
    width: 45, 
    height: 45, 
    
  },
//Content 
  mapContainer:{
    flex: 2,
    
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },

  locationInfo:{
    flex: 0.23,

    
    justifyContent: 'center',
    alignContent: 'center',


    fontSize: 16,
    fontFamily: 'Encode Sans Expanded',
    fontWeight: 'bold',

    margin: 12, 
    padding: 10
  },
 
  locationDisplay:{
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    
    width: '100%',
    height:  375,

    margin: 5,
    
  },

  locationImage:{
    width: '100%',
    height: '85%',
    margin: 5,
    padding: 5

  },

  //Footer button
  continueButtonContainer:{
    flex: 0.1,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',

  },
  continueButton:{
    backgroundColor: '#FD5E5E',
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


});
