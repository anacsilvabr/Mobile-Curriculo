
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

export default function ExperienciaAcademicaScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.eyebrow}>MINHA FORMAÇÃO</Text>

      <Text style={styles.title}>
        Experiência acadêmica.
      </Text>

      <Text style={styles.intro}>
        Minha trajetória de aprendizagem, projetos e desafios
        na área de tecnologia.
      </Text>

      <View style={styles.card}>
        <Text style={styles.category}>FORMAÇÃO</Text>
        <Text style={styles.cardTitle}>
          Tecnologia da Informação
        </Text>
        <Text style={styles.description}>
          Estudos voltados ao desenvolvimento de software,
          programação e criação de soluções tecnológicas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.category}>CONQUISTA</Text>
        <Text style={styles.cardTitle}>
          2º lugar em Hackathon
        </Text>
        <Text style={styles.description}>
          Participação no Hackathon do Festival de Robótica e
          Programação da Prefeitura do Recife, realizado nos
          dias 25 e 26 de agosto de 2026.
        </Text>
        <View style={styles.highlight}>
          <Text style={styles.highlightText}>
            Projeto: RoboEduca 0
          </Text>
        </View>
        <Text style={styles.description}>
          Proposta que integrou literatura, música e pensamento
          computacional.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.category}>PROJETO INTEGRADOR</Text>
        <Text style={styles.cardTitle}>AtYmed</Text>
        <Text style={styles.description}>
          Desenvolvimento de uma proposta de plataforma de
          inteligência operacional hospitalar, com foco na
          análise de dados, na redução de desperdícios e no
          apoio à tomada de decisões.
        </Text>
      </View>

      <Text style={styles.footer}>
        Conhecimento que se transforma em prática. ✦
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
    fontSize: 32,
    lineHeight: 40,
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
  category: {
    color: COLORS.pink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  highlight: {
    backgroundColor: COLORS.pinkLight,
    borderRadius: 12,
    padding: 12,
    marginVertical: 14,
  },
  highlightText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
  },
  footer: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
  },
});
