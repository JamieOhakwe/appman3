import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App(){
    return(
        <View className="flex-1 items-center justify-center bg-red-300">
            <Text className="text-3xl">Hello, CHIGOZIE!</Text>
            <StatusBar style="auto"/>
            <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
            <Text className="text-red-500">Hello</Text>
        </View>
    )
}

