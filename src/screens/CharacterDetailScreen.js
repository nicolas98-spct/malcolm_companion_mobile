import { Image, ScrollView, Text, View } from 'react-native';
import { getCharacter } from '../api/api';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import localImages from '../utils/localImages';

const characterProfiles = {
  malcolm:
    'Malcolm es el protagonista de la serie. Es un estudiante superdotado, analítico y ansioso, atrapado entre la exigencia escolar, el caos familiar y su dificultad para vivir una adolescencia normal.',
  reese:
    'Reese es impulsivo, competitivo y problemático. Aunque suele actuar sin pensar, representa el lado más caótico de la familia y aporta gran parte del humor físico de la serie.',
  dewey:
    'Dewey es el hermano menor más sensible y creativo. Su aparente inocencia contrasta con una gran inteligencia emocional y una forma muy particular de entender el mundo.',
  francis:
    'Francis es el hermano mayor rebelde. Su historia muestra el conflicto entre independencia, inmadurez y búsqueda de identidad fuera del núcleo familiar.',
  lois:
    'Lois es una madre estricta, intensa y protectora. Su carácter fuerte sostiene el orden familiar, aunque muchas veces lo hace desde el control y la confrontación.',
  hal:
    'Hal es un padre cariñoso, inmaduro y emocionalmente desbordado. Su personalidad absurda y afectiva equilibra la rigidez de Lois dentro de la familia.',
  stevie:
    'Stevie es el mejor amigo de Malcolm. Es brillante, competitivo y sarcástico, y funciona como contrapunto intelectual y emocional del protagonista.',
  herkabe:
    'Herkabe es un profesor exigente, competitivo y obsesionado con el rendimiento académico. Representa la presión escolar y el conflicto intelectual dentro de la serie.',
};

const fallbackProfile =
  'Personaje del universo Malcolm Verse con información, relaciones y momentos destacados.';

function getCharacterProfile(character) {
  const key = String(character?.id ?? character?.name ?? '').trim().toLowerCase();
  return characterProfiles[key] ?? fallbackProfile;
}

function renderList(items) {
  return Array.isArray(items) && items.length ? items.join(' · ') : 'Información destacada próximamente.';
}

export default function CharacterDetailScreen({ route }) {
  const { data: character, loading } = useApi(() => getCharacter(route.params?.id), [route.params?.id]);
  if (loading || !character) return <Loader />;

  const sections = [
    { title: 'Perfil', content: getCharacterProfile(character) },
    { title: 'Momentos', content: renderList(character.moments), image: localImages.epGraduacion },
    { title: 'Relaciones', content: renderList(character.relations) },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={{ backgroundColor: '#d71920', paddingTop: 54, padding: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '900' }}>← Volver</Text>
        <Text style={{ color: '#fff', fontSize: 38, fontWeight: '900' }}>{character.name}</Text>
      </View>
      <View style={{ padding: 18 }}>
        <Image source={character.image} style={{ width: '100%', height: 330, borderRadius: 32 }} />
        <View style={{ backgroundColor: '#d71920', borderRadius: 28, padding: 20, marginTop: -34, marginHorizontal: 14 }}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: '900' }}>{character.role}</Text>
          <Text style={{ color: '#fff', marginTop: 8, lineHeight: 20 }}>{character.description}</Text>
        </View>
        {sections.map((section) => (
          <View key={section.title} style={{ backgroundColor: '#fff', borderRadius: 24, padding: 18, marginTop: 14 }}>
            <Text style={{ fontSize: 24, fontWeight: '900' }}>{section.title}</Text>
            <Text style={{ color: '#666', marginTop: 6, lineHeight: 20 }}>{section.content}</Text>
            {section.image && <Image source={section.image} style={{ marginTop: 12, height: 120, borderRadius: 18, width: '100%' }} />}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
