

import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const API_URL = 'https://curriculo-express-ruby.vercel.app';

type Pessoa = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  professional_summary: string;
};

export default function PessoasScreen() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarPessoas() {
      try {
        const resposta = await fetch(`${API_URL}/persons`);
        const dados = await resposta.json();

        if (!resposta.ok) {
          throw new Error(dados.mensagem || 'Erro ao buscar pessoas.');
        }

        setPessoas(dados.pessoas);
      } catch {
        setErro('Não foi possível carregar os dados. Tente novamente.');
      } finally {
        setCarregando(false);
      }
    }

    buscarPessoas();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Pessoas cadastradas</Text>
      <Text style={styles.subtitulo}>
        Dados carregados da API do Curriculo Express.
      </Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#E99AB0" />
      ) : erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : (
        pessoas.map((pessoa) => (
          <View key={pessoa.id} style={styles.card}>
            <Text style={styles.nome}>{pessoa.full_name}</Text>
            <Text style={styles.texto}>{pessoa.email}</Text>
            <Text style={styles.texto}>{pessoa.phone}</Text>
            <Text style={styles.resumo}>
              {pessoa.professional_summary}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F6',
    padding: 24,
  },
  titulo: {
    color: '#342B30',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitulo: {
    color: '#786B72',
    fontSize: 15,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F9E3E9',
  },
  nome: {
    color: '#342B30',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  texto: {
    color: '#786B72',
    fontSize: 14,
    marginBottom: 5,
  },
  resumo: {
    color: '#51454B',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  erro: {
    color: '#B42318',
    fontSize: 15,
  },
});
