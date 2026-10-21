
import { NativeTabs } from 'expo-router/unstable-native-tabs';

const COLORS = {
  background: '#FFF9F6',
  indicator: '#F9E3E9',
  text: '#342B30',
};

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor={COLORS.background}
      indicatorColor={COLORS.indicator}
      labelStyle={{
        default: { color: COLORS.text },
        selected: { color: COLORS.text },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="sobre">
        <NativeTabs.Trigger.Label>Sobre</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="experiencia-academica">
        <NativeTabs.Trigger.Label>Acadêmica</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="experiencia-profissional">
        <NativeTabs.Trigger.Label>Profissional</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="projetos">
        <NativeTabs.Trigger.Label>Projetos</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="pessoas">
        <NativeTabs.Trigger.Label>Pessoas</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
