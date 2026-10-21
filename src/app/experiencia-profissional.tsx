
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

export default function ExperienciaProfissionalScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.eyebrow}>MINHA TRAJETÓRIA</Text>

      <Text style={styles.title}>
        Experiência profissional.
      </Text>

      <Text style={styles.intro}>
        Experiências que contribuíram para o desenvolvimento
        das minhas habilidades pessoais e profissionais.
      </Text>

      <View style={styles.card}>
        <Text style={styles.category}>EXPERIÊNCIA PRÁTICA</Text>
        <Text style={styles.cardTitle}>
          Vendas e atendimento
        </Text>
        <Text style={styles.description}>
          Experiência com vendas de produtos, desenvolvendo
          habilidades de comunicação, organização e contato
          com clientes.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.category}>ATIVIDADES DE APOIO</Text>
        <Text style={styles.cardTitle}>
          Cuidado e responsabilidade
        </Text>
        <Text style={styles.description}>
          Vivência em atividades de cuidado com pessoas,
          exigindo atenção, responsabilidade e compromisso
          com as necessidades do dia a dia.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.category}>VOLUNTARIADO</Text>
        <Text style={styles.cardTitle}>
          Igreja Batista Missionária Aliança
        </Text>
        <Text style={styles.description}>
          Participação voluntária em atividades de limpeza
          e organização do ambiente, contribuindo para a
          conservação e o bom funcionamento do espaço.
        </Text>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteTitle}>
          Habilidades desenvolvidas
        </Text>
        <Text style={styles.noteText}>
          Organização · Comunicação · Responsabilidade ·
          Colaboração
        </Text>
      </View>

      <Text style={styles.footer}>
        Cada experiência também é uma oportunidade de aprender. ✦
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
  note: {
    backgroundColor: COLORS.pinkLight,
    borderRadius: 16,
    padding: 18,
    marginTop: 4,
  },
  noteTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 8,
  },
  noteText: {
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 22,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
  },
});
