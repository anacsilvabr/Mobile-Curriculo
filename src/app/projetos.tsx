
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const COLORS = {
  background: '#FFF9F6',
  surface: '#FFFFFF',
  pink: '#E99AB0',
  pinkLight: '#F9E3E9',
  text: '#342B30',
  muted: '#786B72',
  border: '#F0DDE3',
};

const projects = [
  {
    number: '01',
    title: 'AtYmed',
    category: 'INTELIGÊNCIA OPERACIONAL HOSPITALAR',
    description:
      'Plataforma conceitual voltada à análise de dados operacionais e financeiros hospitalares, com foco na redução de desperdícios e no apoio à tomada de decisões.',
    tags: 'Análise de dados · Tecnologia · Gestão',
  },
  {
    number: '02',
    title: 'Jogo de Dados',
    category: 'APLICAÇÃO MOBILE',
    description:
      'Jogo para dois participantes, com cinco rodadas, apresentação dos resultados e interface desenvolvida com React Native e Expo.',
    tags: 'React Native · Expo · TypeScript',
  },
  {
    number: '03',
    title: 'Mini Bio',
    category: 'PROJETO ACADÊMICO',
    description:
      'Aplicativo mobile de apresentação pessoal, desenvolvido como atividade acadêmica para praticar a construção de interfaces e componentes reutilizáveis.',
    tags: 'Expo · Componentes · Mobile',
  },
];

export default function ProjetosScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>MEU PORTFÓLIO</Text>
      <Text style={styles.title}>Projetos em destaque.</Text>
      <Text style={styles.intro}>
        Ideias, estudos e soluções que fazem parte da minha jornada de
        aprendizagem em tecnologia.
      </Text>

      {projects.map((project) => (
        <View key={project.number} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.numberBadge}>
              <Text style={styles.number}>{project.number}</Text>
            </View>
            <Text style={styles.category}>{project.category}</Text>
          </View>

          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>

          <View style={styles.divider} />
          <Text style={styles.tags}>{project.tags}</Text>
        </View>
      ))}

      <Text style={styles.footer}>
        Sempre aprendendo. Sempre construindo. ✦
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    padding: 24,
    paddingBottom: 48,
  },
  eyebrow: {
    color: COLORS.pink,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 12,
  },
  title: {
    color: COLORS.text,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '800',
    marginBottom: 12,
  },
  intro: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 18,
  },
  numberBadge: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: COLORS.pinkLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: COLORS.text,
    fontWeight: '800',
    fontSize: 13,
  },
  category: {
    color: COLORS.pink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    flex: 1,
  },
  projectTitle: {
    color: COLORS.text,
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 16,
  },
  tags: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
  },
});
