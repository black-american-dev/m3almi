import { Stack, Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Stack.Screen name='home' options={{title:"home" , headerShown : false}} />
        <Stack.Screen name='SearchBar' options={{title:"Browse" , headerShown : false}} />
        <Stack.Screen name='settings' options={{title:"settings" , headerShown : false}} />
    </Tabs>
  )
}

export default _layout