import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // make sure to install expo-linear-gradient

const categories = [
  {
    id: '1',
    title: 'Plumbing',
    description: 'Fixing leaks, installing pipes, repairing water systems',
    icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176363.png'
  },
  {
    id: '2',
    title: 'Electricity',
    description: 'Wiring, electrical repairs, installing devices',
    icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png'
  },
  {
    id: '3',
    title: 'Carpentry',
    description: 'Woodwork, furniture repair, door and window installation',
    icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
  },
  {
    id: '4',
    title: 'House Cleaning',
    description: 'Home cleaning, deep cleaning, maintenance',
    icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png'
  },
];

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: category.icon }} style={styles.icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.description}>{category.description}</Text>
        <LinearGradient
          colors={['#FF6B6B', '#FFD93D']}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>See more</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default function CategoryCards() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    paddingVertical: 25,
  },
  card: {
    width: 250,
    minHeight: 160,
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    marginRight: 15,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#3A3A3A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#CCCCCC',
    marginVertical: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#1E1E1E',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
