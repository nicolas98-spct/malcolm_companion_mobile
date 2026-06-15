import { ScrollView, Text, View } from 'react-native';
import { getClips } from '../api/api';
import useApi from '../hooks/useApi';
import ClipCard from '../components/ClipCard';
import Loader from '../components/Loader';
export default function ClipsScreen(){const{data,loading}=useApi(getClips,[]); if(loading)return <Loader/>; return <ScrollView style={{flex:1,backgroundColor:'#f1f1f1'}} contentContainerStyle={{padding:18,paddingTop:58}}><View style={{backgroundColor:'#d71920',borderRadius:30,padding:20,marginBottom:18}}><Text style={{color:'#fff',fontSize:36,fontWeight:'900'}}>Clips destacados</Text><Text style={{color:'#fff',marginTop:6}}>Momentos rápidos para revivir el Malcolm Verse.</Text></View>{data.map(clip=><View key={clip.id} style={{marginBottom:14}}><ClipCard clip={clip}/></View>)}</ScrollView>}
