import { StyleSheet, Text,Image, TouchableOpacity, SafeAreaView, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const emergencyContacts = () =>{
    return(

        <SafeAreaView style = {styles.container}>
            <SafeAreaView style = {styles.navBar}>
                <TouchableOpacity
                onPress={() => navigation.navigate('CallAmbulanceScreen')}>
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

            <SafeAreaView style = {styles.content}>
                <SafeAreaView style = {styles.searchContainer}>
                    <Text style = {{margin: 10, color: '#FF5555', fontFamily: 'Port Lligat Sans', fontSize:22}}>Emergency Contacts List</Text>
                    <TextInput style = {styles.searchBar} placeholder='Search Contact Name' ></TextInput>
                </SafeAreaView>
                <SafeAreaView style = {styles.contactList}>

                    <SafeAreaView style = {styles.contactItem}>
                        <View style = {styles.contactIcon}>
                            <Image 
                                source={{
                                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7ZW9agJBFIUPEkKKEFIEkiYmKSRlumAIpEweJF2q1HmKNHY2go1gb6UPIGJl4yNYKVgs69/1jD+duzv37orNfvCxzdx7ltmZvUBOlojIJf2jfRrQJZ3SHv2mBaSBDe7pUOIZ0BtYYXFL/GjCAgs/RUc5qlfcfn5AxxsMIdfQcQVDSGbEhSygY2EJCaEjtIQE0BFYQkbQoV2/uSfPdOV5R9yvpggLLOx4hjRghcVfniHvSAMbdBMC2kgLm5TpLCJgQktJPQoJAed8nNFexJI+vRPLTGFRkf7TsfgxolX65NO8ROt0Ljbcka/Rx0PNb3dvHko2uHtToQ/7gB/Zzu5j4Hbk132wV3qB4+AOzcvJ50kecpqQHBVrWZ/DEXDeY6UAAAAASUVORK5CYII='
                                }}
                                style = {{width: 32, height: 35}}
                            />
                        </View>

                        <View style = {styles.contactInfo}>
                            <Text style = {{textAlign: 'left', color: '#FD5E5E', fontFamily: 'Port Lligat Sans', fontSize: 24}}>item.contactName</Text>
                            <Text style = {{textAlign: 'left', color: '#FD5E5E', fontFamily: 'Port Lligat Sans', fontSize: 18}}>item.ContactNumber</Text>
                        </View>
                    </SafeAreaView>    
                   

                </SafeAreaView>
            </SafeAreaView>

            
        </SafeAreaView>
    )
};

export default emergencyContacts;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection:'column',
        
        
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    //Header
    navBar:{
        flex: 0.13,
        flexDirection: 'row',
        flexWrap: 'wrap',

        alignItems: 'center',
        alignContent: 'right',
        
        backgroundColor: '#FD5E5E',
        width: '100%',
        height: '8%',
    
    
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
    //content div
    content:{
        flex: 0.87,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fffff',
        fontFamily:'Port Lligat Sans',
        fontSize: 18,

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    //searchbar
    searchContainer:{
        flex: 0.15,
        width: '100%',
        height: '10%',

        flexDirection:'column',
        

        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',

        textAlign: 'center'

        
    },
    searchBar:{
        backgroundColor: '#ECE4E4',
        width: 300,
        height: 30,

        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'black',

        padding: 10,
        marginBottom: 15
    },
    //List
    contactList:{
        flex: 0.85,

        width: '100%',
        height: '90%',
        
        flexDirection: 'column',
        alignContent: 'flex-start',

        margin: 15,
    },
    contactItem:{
        flexDirection: 'row',
        height: 55,
        width: '100%'
    },
    contactIcon:{
        backgroundColor:'#FD5E5E', 
        height: 55, 
        width: 55, 
        borderRadius: '50%',

        justifyContent:'center',
        alignItems: 'center',

        margin: 10,
        padding: 10,
        left: 20,
     
    },
    contactInfo:{
        
        
        textAlign: 'left',
        fontFamily: 'Port Lligat Sans',

        margin: 15,
        padding: 12
    }
    

});

function renderItems(data) {
    return data.map((item, index) => {
      return (
        
        <SafeAreaView key = {index} style = {styles.contactItem}>

        <View style = {styles.contactIcon}>
            <Image 
                source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7ZW9agJBFIUPEkKKEFIEkiYmKSRlumAIpEweJF2q1HmKNHY2go1gb6UPIGJl4yNYKVgs69/1jD+duzv37orNfvCxzdx7ltmZvUBOlojIJf2jfRrQJZ3SHv2mBaSBDe7pUOIZ0BtYYXFL/GjCAgs/RUc5qlfcfn5AxxsMIdfQcQVDSGbEhSygY2EJCaEjtIQE0BFYQkbQoV2/uSfPdOV5R9yvpggLLOx4hjRghcVfniHvSAMbdBMC2kgLm5TpLCJgQktJPQoJAed8nNFexJI+vRPLTGFRkf7TsfgxolX65NO8ROt0Ljbcka/Rx0PNb3dvHko2uHtToQ/7gB/Zzu5j4Hbk132wV3qB4+AOzcvJ50kecpqQHBVrWZ/DEXDeY6UAAAAASUVORK5CYII='
                }}
                style = {{width: 32, height: 35}}
            />
        </View>

        <View style = {styles.contactInfo}>
            <Text style = {{textAlign: 'left', color: '#FD5E5E', fontFamily: 'Port Lligat Sans', fontSize: 24}}>{item.contactName}</Text>
            <Text style = {{textAlign: 'left', color: '#FD5E5E', fontFamily: 'Port Lligat Sans', fontSize: 18}}>{item.ContactNumber}</Text>
        </View>
    </SafeAreaView> 
      );
    });
  }