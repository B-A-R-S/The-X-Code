import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const InforPortal = () => {
  return (
    <SafeAreaView>
        <View style = {styles.upper}>
            <Text style = {styles.infoText}>InforPortal</Text>
        </View>

        <View style = {styles.bottom}>
            <TouchableOpacity style = {styles.search}></TouchableOpacity>
            
            <SafeAreaView style = {{marginTop:-15}}>
                <View>
                    <TouchableOpacity style = {styles.space1}></TouchableOpacity>
                    {/* <Text style = {{position: 'absolute',top: 340, left: 102,}}>Article-1</Text> */}
                </View>

                <View>
                    <TouchableOpacity  style = {styles.space2}></TouchableOpacity>
                    {/* <Text style = {{position: 'absolute',top: 340, left: 280,}}>Article-2</Text> */}
                </View>

                <View>
                    <TouchableOpacity style = {styles.space3}></TouchableOpacity>
                    {/* <Text style = {{alignContent: 'center',top: 500, }}>Article-3</Text> */}
                </View>

                <View>
                    <TouchableOpacity style = {styles.space4}></TouchableOpacity>
                    {/* <Text style = {{position: 'absolute',top: 500, left: 280,}}>Article-4</Text> */}
                </View>

                <View>
                    <TouchableOpacity style = {styles.space5}></TouchableOpacity>
                    {/* <Text style = {{position: 'absolute',top: 660, left: 102,}}>Article-5</Text> */}
                </View>

                <View>
                    <TouchableOpacity style = {styles.space6}></TouchableOpacity>
                    {/* <Text style = {{position: 'absolute',top: 660, left: 280,}}>Article-6</Text> */}
                </View>
            </SafeAreaView>

            
        </View>
    </SafeAreaView>
  )
}

export default InforPortal

const styles = StyleSheet.create({
    upper:{
        position: 'absolute',
        width: 490,
        height: 101,
        left: 0,
        top: 0,
        backgroundColor: '#F22F5E',
    },

    infoText:{
        position: 'absolute',
        width: 228,
        height: 30,
        left: 19.5,
        top: 62,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 25,
        lineHeight: 30,

        color: '#D9D9D9',
    },

    search:{
        box: 'border-box',
        position: 'absolute',
        width: 307,
        height: 46,
        left: 52,
        top: 126,
        borderRadius: 25,
        borderWidth: 3,
        borderColor:'#F22F5E',
    },

    space1:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 52,
        top: 218,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    },

    space2:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 230,
        top: 218,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    },

    space3:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 52,
        top: 380,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    },

    space4:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 230,
        top: 380,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    },

    space5:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 52,
        top: 541,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    },

    space6:{
        box: 'border-box',
        position: 'absolute',
        width: 132,
        height: 112,
        left: 230,
        top: 541,
        borderColor:'#F22F5E',
        borderWidth:2,
        borderRadius: 15,
    }

})