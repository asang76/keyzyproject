import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';


function App() {
  const data = [
    {
      id: 1,
      minamount: 30000,
      maxamount: 60000,
      heading: 'Deposit',
      colors: ['#F7A51E', '#FE1FAC'],
      backgroundColors: "#FC21AD14",
      borderColor: '#FE1FAC'
    },
    {
      id: 2,
      minamount: 140000,
      maxamount: 240000,
      heading: 'Borrowing power',
      colors: ['#2233FD', '#18EBFF'],
      backgroundColors: "#223AFE14",
      borderColor: '#2233FD'
    },
    {
      id: 3,
      minamount: 170000,
      maxamount: 300000,
      heading: 'What you can afford today',
      colors: ['black', 'black'],
      backgroundColors: "#F0F0F0B2",
      borderColor: '#000000'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(2);
  const GradientText = ({ text, colors }) => {
    return (
      <MaskedView maskElement={<Text style={{ fontWeight: 'bold', fontSize: 26, textAlign: 'center' ,fontFamily: 'SF-Pro'}}>£{text}</Text>}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 26, textAlign: 'center', opacity: 0,fontFamily: 'SF-Pro' }}>£{text}</Text>
        </LinearGradient>
      </MaskedView>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ height: '70%', width: '100%' }}>
          <LinearGradient
            colors={['#F7A51E', '#FE1FAC']}
            style={{ flex: 1, width: '100%' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", margin: 20 }}>
              <Text style={{ color: "white", fontSize: 27, fontFamily: 'SF-Pro'}}>Home</Text>
              <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 20, padding: 10, position: 'relative' }}>
                <Image
                  source={require('./assets/notification.png')}
                />
                <View style={{ backgroundColor: "#2233FD", height: 10, width: 10, borderRadius: 100, position: 'absolute', right: 10, top: 10 }}></View>
              </View>
            </View>

            <View
              style={{
                position: 'relative',
                width: 300, height: 300, backgroundColor: "white",
                borderRadius: 200, marginTop: 30, display: 'flex', alignSelf: 'center',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0,
                shadowRadius: 10,
                elevation: 20,
                display: selectedIndex === 0 ? 'flex' : 'none',
              }}>
              <Text style={{ position: 'absolute', bottom: 40, left: 115, fontSize: 18, display: 'flex', alignSelf: "center",fontFamily: 'SF-Pro' }}>{data[0].heading}</Text>
              <Text style={{ position: 'absolute', bottom: 120, left: 105, fontSize: 20, display: 'flex', alignSelf: "center",fontFamily: 'SF-Pro' }}>of £{data[0].maxamount}</Text>
              <Text style={{ position: 'absolute', color: 'black', bottom: 150, left: 85, fontWeight: '700', fontSize: 35, display: 'flex', alignSelf: "center" ,fontFamily: 'SF-Pro'}}> £{data[0].minamount}</Text>
              <AnimatedCircularProgress
                style={{ position: 'absolute', right: 7, top: 6 }}
                size={270}
                width={19}
                fill={data[0]?.minamount * 100 / data[0]?.maxamount}
                tintColor="#FE1FAC"
                backgroundColor="#F0F0F0"
                padding={10}
                rotation={-125}
                arcSweepAngle={260}
                lineCap="round"
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="0" fill="blue" />}

              />

            </View>

            <View
              style={{
                position: 'relative',
                width: 300, height: 300, backgroundColor: "white",
                borderRadius: 200, marginTop: 30, display: 'flex', alignSelf: 'center',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0,
                shadowRadius: 10,
                elevation: 20,
                display: selectedIndex === 1 ? 'flex' : 'none',
              }}>
              <Text style={{ position: 'absolute', bottom: 40, left: 83, fontSize: 18, display: 'flex', alignSelf: "center",fontFamily: 'SF-Pro' }}>{data[1].heading}</Text>
              <Text style={{ position: 'absolute', bottom: 120, left: 100, fontSize: 20, display: 'flex', alignSelf: "center",fontFamily: 'SF-Pro' }}>of £{data[1].maxamount}</Text>
              <Text style={{ position: 'absolute', color: 'black', bottom: 150, left: 75, fontWeight: '700', fontSize: 35, display: 'flex', alignSelf: "center" ,fontFamily: 'SF-Pro'}}> £{data[1].minamount}</Text>

              <AnimatedCircularProgress
                style={{ position: 'absolute', right: 7, bottom: 6 }}
                size={270}
                width={19}
                fill={data[1]?.minamount * 100 / data[1]?.maxamount}
                tintColor="#2233FD"
                backgroundColor="#F0F0F0"
                padding={10}
                rotation={-128}
                arcSweepAngle={260}
                lineCap="round"
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="0" fill="blue" />}
                data={data[1]}
              />
            </View>

            <View
              style={{
                position: 'relative',
                width: 300, height: 300, backgroundColor: "white",
                borderRadius: 200, marginTop: 30, display: 'flex', alignSelf: 'center',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0,
                shadowRadius: 10,
                elevation: 20,
                display: selectedIndex === 2 ? 'flex' : 'none',
              }}>
              <Text style={{ position: 'absolute', color: 'black', bottom: 40, left: 95, width: 110, textAlign: 'center', fontSize: 18, display: 'flex', alignSelf: "center",fontFamily:'SF-Pro' }}>{data[2].heading}</Text>
             
              <Text style={{ position: 'absolute', bottom: 120, left: 100, fontSize: 20, display: 'flex', alignSelf: "center",fontFamily:'SF-Pro' }}>of £{data[2].maxamount}</Text>
             
              <Text style={{ position: 'absolute', color: 'black', bottom: 150, left: 75, fontWeight: '700', fontSize: 35, display: 'flex', alignSelf: "center", fontFamily: 'SF-Pro' }}> £{data[2].minamount}</Text>
              <AnimatedCircularProgress
                style={{ position: 'absolute', right: 7, top: 6 }}
                size={270}
                width={19}
                fill={data[0]?.minamount * 100 / data[0]?.maxamount}
                tintColor="#FE1FAC"
                backgroundColor="#F0F0F0"
                padding={10}
                rotation={-125}
                arcSweepAngle={70}
                lineCap="round"
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="0" fill="blue" />}

              />
              <AnimatedCircularProgress
                style={{ position: 'absolute', right: 7, bottom: 6 }}
                size={270}
                width={19}
                fill={data[0]?.minamount * 100 / data[0]?.maxamount}
                tintColor="#2233FD"
                backgroundColor="#F0F0F0"
                padding={10}
                rotation={-40}
                arcSweepAngle={160}
                lineCap="round"
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="0" fill="blue" />}

              />
            </View>
          </LinearGradient>
        </View>

        <View>
        </View>

      </View>
      <View style={{ marginTop: -40, display: "flex", flexDirection: 'row', justifyContent: 'space-between', gap: 9, paddingHorizontal: 10 }}>

        {data.map((item, index) => (
          <TouchableOpacity key={index} style={{ backgroundColor: item?.backgroundColors, flex: 1, borderRadius: 20, borderColor: item?.borderColor, borderWidth: selectedIndex === index ? 2 : 0 }} onPress={() => setSelectedIndex(index)}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <GradientText
                text={item.minamount && (item.minamount.toString().length === 5
                  ? Math.round(item.minamount / 1000) + 'k'
                  : Math.round(item.minamount / 1000) + 'k')}
                colors={item.colors}
              />

              <Text style={{ marginTop: -3, marginBottom: 3, fontWeight: '700', color: '#202020' , fontFamily: 'SF-Pro' }}> of {""}
                {item.maxamount &&
                  (item.maxamount.toString().length === 5
                    ? Math.round(item.maxamount / 1000) + 'k'
                    : Math.round(item.maxamount / 1000) + 'k')}
              </Text>
              <Text style={{ color: '#000000', textAlign: 'center', fontFamily: 'SF-Pro' }}>{item.heading}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default App;
