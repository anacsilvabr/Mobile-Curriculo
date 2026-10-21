
import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
} from 'expo-router/ui';

import { StyleSheet, View, Text } from 'react-native';

const COLORS = {
  background: '#FFF9F6',
  surface: '#FFFFFF',
  pinkLight: '#F9E3E9',
  text: '#342B30',
  muted: '#786B72',
  border: '#F0DDE3',
};

export default function AppTabsWeb() {
  return (
    <Tabs>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.brand}>AC</Text>
          <Text style={styles.headerLabel}>
            PORTFÓLIO PESSOAL
          </Text>
        </View>
      </View>

      <TabList style={styles.tabList}>
        <TabTrigger name="index" href="/" style={styles.tab}>
          <Text style={styles.tabText}>Home</Text>
        </TabTrigger>

        <TabTrigger name="sobre" href="/sobre" style={styles.tab}>
          <Text style={styles.tabText}>Sobre</Text>
        </TabTrigger>

        <TabTrigger
          name="experiencia-academica"
          href="/experiencia-academica"
          style={styles.tab}
        >
          <Text style={styles.tabText}>Acadêmica</Text>
        </TabTrigger>

        <TabTrigger
          name="experiencia-profissional"
          href="/experiencia-profissional"
          style={styles.tab}
        >
          <Text style={styles.tabText}>Profissional</Text>
        </TabTrigger>

        <TabTrigger
          name="projetos"
          href="/projetos"
          style={styles.tab}
        >
          <Text style={styles.tabText}>Projetos</Text>
        </TabTrigger>
      </TabList>

      <TabSlot />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  header: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  brand: {
    width: 38,
    height: 38,
    lineHeight: 38,
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: 13,
    backgroundColor: COLORS.pinkLight,
    color: COLORS.text,
    fontWeight: '800',
  },
  headerLabel: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  tabList: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: COLORS.surface,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: COLORS.background,
  },
  tabText: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '600',
  },
});
