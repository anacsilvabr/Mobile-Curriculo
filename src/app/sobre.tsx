import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SOBRE MIM</Text>

      <Text style={styles.title}>Minha trajetória em tecnologia</Text>

      <Text style={styles.description}>
        Sou estudante de Tecnologia da Informação e tenho interesse em
        desenvolvimento de software, interfaces digitais e criação de
        soluções para problemas reais.
      </Text>

      <Text style={styles.sectionTitle}>Tecnologias e ferramentas</Text>

      <View style={styles.tags}>
        <Text style={styles.tag}>JavaScript</Text>
        <Text style={styles.tag}>Java</Text>
        <Text style={styles.tag}>React Native</Text>
        <Text style={styles.tag}>Expo</Text>
        <Text style={styles.tag}>Node.js</Text>
      </View>

      <Text style={styles.note}>
        Esta seção será ampliada com as tecnologias e os módulos utilizados
        no aplicativo, além da descrição da funcionalidade extra.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F6',
    padding: 24,
    justifyContent: 'center',
  },
  label: {
    color: '#E99AB0',
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#342B30',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 16,
  },
  description: {
    color: '#786B72',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 28,
  },
  sectionTitle: {
    color: '#342B30',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F9E3E9',
    color: '#342B30',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 20,
    overflow: 'hidden',
  },
  note: {
    color: '#786B72',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 24,
  },
});