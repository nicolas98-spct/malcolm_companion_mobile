import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { getEpisodes } from '../api/api';
import useApi from '../hooks/useApi';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';
const filters = ['Todos', 'T7', 'T4', 'Mejor rating'];
export default function EpisodesScreen({ navigation }) { const [query,setQuery]=useState(''); const [filter,setFilter]=useState('Todos'); const {data,loading}=useApi(getEpisodes,[]); const list=useMemo(()=> (data||[]).filter(e=>e.title.toLowerCase().includes(query.toLowerCase())),[data,query]); if(loading)return <Loader/>; return <ScrollView style={{flex:1,backgroundColor:'#f1f1f1'}} contentContainerStyle={{padding:18,paddingTop:58}}><Text style={{fontSize:36,fontWeight:'900'}}>Favoritos ♥</Text><TextInput placeholder="Buscar episodio" value={query} onChangeText={setQuery} style={{backgroundColor:'#fff',borderRadius:999,padding:14,marginVertical:14}}/><ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:12}}>{filters.map(f=><Pressable key={f} onPress={()=>setFilter(f)} style={{backgroundColor:filter===f?'#d71920':'#fff',borderRadius:999,paddingHorizontal:16,paddingVertical:10,marginRight:8}}><Text style={{color:filter===f?'#fff':'#111',fontWeight:'900'}}>{f}</Text></Pressable>)}</ScrollView>{list.map(episode=><EpisodeCard key={episode.id} episode={episode} onPress={()=>navigation.navigate('EpisodeDetail',{id:episode.id})}/>)}</ScrollView>; }
