
import { ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const COLORS = {
  background: '#FFF9F6',
  surface: '#FFFFFF',
  pink: '#E99AB0',
  pinkLight: '#F9E3E9',
  text: '#342B30',
  muted: '#786B72',
  border: '#F0DDE3',
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>AC</Text>
          </View>
          <Text style={styles.headerLabel}>PORTFÓLIO PESSOAL</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>OLÁ, SEJA BEM-VINDO(A)!</Text>

          <Text style={styles.title}>
            Ana Clara{'\n'}
            <Text style={styles.titleAccent}>Silva Brasil.</Text>
          </Text>

          <Text style={styles.description}>
            Estudante de Tecnologia da Informação, interessada em
            desenvolvimento de software e na criação de soluções úteis
            para pessoas e organizações.
          </Text>

          <View style={styles.tagRow}>
            <Text style={styles.tag}>Desenvolvimento</Text>
            <Text style={styles.tag}>Tecnologia</Text>
          </View>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push('/sobre')}
          >
            <Text style={styles.primaryButtonText}>
              Conheça meu perfil →
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push('/projetos')}
          >
            <Text style={styles.secondaryButtonText}>
              Ver meus projetos
            </Text>
          </Pressable>

          <Pressable
            style={styles.databaseButton}
            onPress={() => router.push('/pessoas')}
          >
            <Text style={styles.databaseButtonText}>
              Ver pessoas cadastradas
            </Text>
          </Pressable>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardLabel}>MINHA PROPOSTA</Text>
          <Text style={styles.cardTitle}>
            Aprender, desenvolver e evoluir.
          </Text>
          <Text style={styles.cardDescription}>
            Este espaço reúne minha formação, minhas experiências e os
            projetos que fazem parte da minha trajetória em tecnologia.
          </Text>
        </View>

        <Text style={styles.footer}>
          Construindo meu caminho na tecnologia ✦
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 48,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: COLORS.pinkLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '800',
  },
  headerLabel: {
    color: COLORS.muted,
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '700',
  },
  hero: {
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  eyebrow: {
    color: COLORS.pink,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 18,
  },
  title: {
    color: COLORS.text,
    fontSize: 48,
    lineHeight: 55,
    fontWeight: '800',
    letterSpacing: -1.5,
    marginBottom: 20,
  },
  titleAccent: {
    color: COLORS.pink,
  },
  description: {
    color: COLORS.muted,
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 560,
    marginBottom: 20,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 26,
  },
  tag: {
    overflow: 'hidden',
    color: COLORS.text,
    backgroundColor: COLORS.pinkLight,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: COLORS.text,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 14,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
  },
  databaseButton: {
    backgroundColor: COLORS.pinkLight,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.pink,
  },
  databaseButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 22,
    padding: 24,
  },
  cardLabel: {
    color: COLORS.pink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.8,
    marginBottom: 12,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 10,
  },
  cardDescription: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 28,
  },
});
