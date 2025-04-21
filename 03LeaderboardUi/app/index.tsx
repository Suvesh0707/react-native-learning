import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const index = () => {
  const winners = [
    { rank: 3, name: 'Sujay Pagam', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO65I-e8VblMSvEkZg15rbkTrOcBSUEEKgQ&s' },
    { rank: 1, name: 'Suvesh Pagam', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEr8FZqbYbvdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679852514870?e=2147483647&v=beta&t=1Sv5CODrnBKVLMMsEUGLU53Q2cVVEjQVhgf4YIiR61s' },
    { rank: 2, name: 'Kirti Mistri', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFoAmWvJu1JLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707672790124?e=2147483647&v=beta&t=VRAOwKpKz2p7uHT23mp4SbppusLf7NDQTJdoBTNshoI' }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Suvesh Pagam',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEr8FZqbYbvdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679852514870?e=2147483647&v=beta&t=1Sv5CODrnBKVLMMsEUGLU53Q2cVVEjQVhgf4YIiR61s',
      points: 23475,
    },
    {
      rank: 2,
      name: 'Kirti Mistri',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFoAmWvJu1JLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707672790124?e=2147483647&v=beta&t=VRAOwKpKz2p7uHT23mp4SbppusLf7NDQTJdoBTNshoI',
      points: 22110,
    },
    {
      rank: 3,
      name: 'Sujay pagam',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO65I-e8VblMSvEkZg15rbkTrOcBSUEEKgQ&s',
      points: 21580,
    },
    {
      rank: 4,
      name: 'Raj Sharma',
      imageUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
      points: 20800,
    },
    {
      rank: 5,
      name: 'Priya Desai',
      imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      points: 20050,
    },
    {
      rank: 6,
      name: 'Ankit Verma',
      imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      points: 19500,
    },
    {
      rank: 7,
      name: 'Neha Joshi',
      imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      points: 18980,
    },
    {
      rank: 8,
      name: 'Rohan Patil',
      imageUrl: 'https://randomuser.me/api/portraits/men/53.jpg',
      points: 18240,
    },
    {
      rank: 9,
      name: 'Ishita Mehta',
      imageUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
      points: 17890,
    },
    {
      rank: 10,
      name: 'Harshad Naik',
      imageUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
      points: 17250,
    },
    {
      rank: 11,
      name: 'Kavita Pawar',
      imageUrl: 'https://randomuser.me/api/portraits/women/38.jpg',
      points: 16890,
    },
    {
      rank: 12,
      name: 'Aman Kulkarni',
      imageUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
      points: 16230,
    },
    {
      rank: 13,
      name: 'Deepika Rane',
      imageUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
      points: 15800,
    },
    {
      rank: 14,
      name: 'Nikhil Ghosh',
      imageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
      points: 15210,
    },
    {
      rank: 15,
      name: 'Meena Nair',
      imageUrl: 'https://randomuser.me/api/portraits/women/57.jpg',
      points: 14890,
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topcontainer}>
        <Text style={styles.headertext}>Leader Board</Text>
        <View style={styles.topparentcontainer}>
          {winners.map((winner, index) => (
            <View key={index} style={styles.topoutercontainer}>
              <Image
                source={{ uri: winner.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.innerText}>{winner.name}</Text>
              <Text style={styles.rankText}>Rank: {winner.rank}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.bottomcontainer}>
        {leaderboard.map((user, index) => (
          <View key={index} style={styles.bottomcard}>
            <Image source={{ uri: user.imageUrl }} style={styles.bottomimage} />
            <View style={styles.infoContainer}>
              <Text style={styles.bottomname}>{user.name}</Text>
              <Text style={styles.bottompoints}>{user.points} pts</Text>
            </View>
            <Text style={styles.bottomrank}>#{user.rank}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1,
  },
  headertext: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  topcontainer: {
    backgroundColor: '#2c2c2c',
    height: 350,
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topparentcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topoutercontainer: {
    backgroundColor: '#3a3a3a',
    height: 160,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginBottom: 8,
  },
  innerText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  rankText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // BOTTOM SECTION
  bottomcontainer: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  bottomcard: {
    backgroundColor: '#262626',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bottomimage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
  },
  bottomname: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bottompoints: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
  bottomrank: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default index;
