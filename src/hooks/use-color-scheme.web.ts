import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Uses the system color scheme on web.
 */
export function useColorScheme() {
  return useRNColorScheme() ?? 'light';
}