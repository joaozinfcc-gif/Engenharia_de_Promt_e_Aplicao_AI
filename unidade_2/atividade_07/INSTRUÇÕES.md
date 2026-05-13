# 📖 INSTRUÇÕES - Estude Rotina (Atividade 07)

## 🚀 Começando Rápido

### 1. Instalação
```bash
cd unidade_2/atividade_07
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```
Acesse: **http://localhost:3000**

### 3. Build para Produção
```bash
npm run build
npm start
```

---

## 📋 Usando a Aplicação

### **Passo 1: Preencher Horários (Aba 1)**

1. Na primeira aba **"Horários"**, preencha quantas horas você dedica a cada atividade:
   - 😴 **Sono**: Ideal 7-9 horas
   - 💼 **Trabalho**: Suas horas de trabalho
   - 🎓 **Aulas**: Suas horas de aula
   - 🚌 **Deslocamento**: Tempo no ônibus/transporte
   - 🍽️ **Refeições**: Tempo de café da manhã, almoço, janta

2. A aplicação **calcula automaticamente** quanto tempo sobra para estudar

**Exemplo:**
```
Sono: 8h
Trabalho: 8h
Aulas: 3h
Deslocamento: 2h
Refeições: 1.5h
---
Comprometido: 22.5h
Disponível para Estudar: 1.5h ✅
```

---

### **Passo 2: Analisar seus Dados (Aba 2)**

1. Vá até a aba **"Análise"**
2. Você verá:
   - 📊 **Gráfico de Barras**: Mostra todas as atividades lado a lado
   - 🥧 **Gráfico de Pizza**: Proporciona como você gasta seu dia
   - 📈 **Cards de Resumo**: Total, comprometido, disponível

3. **Recomendações Inteligentes (com IA)**:
   - ⚠️ Alertas se tiver pouco tempo
   - 💡 Dicas para aproveitar o ônibus
   - ✅ Avisos sobre padrão de sono

**Exemplo de Recomendação:**
```
"Você tem apenas 1.5 horas para estudar. 
Use a técnica Pomodoro e aproveite o tempo no ônibus 
para revisar notas!"
```

---

### **Passo 3: Criar seu Plano (Aba 3)**

1. Vá até a aba **"Plano"**
2. **Adicione suas disciplinas**:
   - Nome (ex: "Algoritmos", "Cálculo I")
   - Horas por semana (quanto tempo você quer dedicar)
   - Prioridade (Alta, Média ou Baixa)
   - Onde estuda (Casa, Ônibus, Faculdade, Trabalho)

3. Clique em **"Adicionar Disciplina"**

4. Sua rotina aparecerá automaticamente:
   - 📅 **Rotina Semanal**: Segunda a Domingo
   - 💡 **Dicas de Estudo**: Técnicas eficientes

**Exemplo de Plano:**
```
Segunda:
  - Algoritmos • 1h • Casa
  - Cálculo I • 0.5h • Ônibus

Terça:
  - Algoritmos • 0.5h • Faculdade
  - Cálculo I • 1h • Casa
```

---

## 🎯 Exemplos Práticos

### Cenário 1: Estudante com Pouco Tempo
```
Horários:
- Sono: 8h
- Trabalho: 8h
- Aulas: 4h
- Deslocamento: 2h
- Refeições: 1.5h
Total Comprometido: 23.5h
DISPONÍVEL PARA ESTUDAR: 0.5h ❌

Recomendação IA:
"Você tem muito pouco tempo! Revise apenas 
o conteúdo mais importante e use o ônibus para estudar."

Plano Sugerido:
- Algoritmos (alta prioridade) 2h/semana
  - Ônibus: 1h
  - Casa: 1h (finais de semana)
```

### Cenário 2: Estudante com Tempo Disponível
```
Horários:
- Sono: 8h
- Trabalho: 0h (só estudante)
- Aulas: 4h
- Deslocamento: 1h
- Refeições: 2h
Total Comprometido: 15h
DISPONÍVEL PARA ESTUDAR: 9h ✅

Recomendação IA:
"Excelente! Você tem bastante tempo. 
Use a técnica Pomodoro para máxima produtividade."

Plano Sugerido:
- Algoritmos: 5h/semana (alta prioridade)
- Cálculo I: 4h/semana (média prioridade)
```

---

## 🤖 Como a IA Personaliza o Plano

A aplicação usa **engenharia de prompts** para:

1. **Analisar seu padrão**:
   - Quanto tempo real você tem
   - Em que locais você estuda melhor
   - Sua prioridade por disciplina

2. **Gerar recomendações context-aware**:
   - Se você tem tempo no ônibus → recomenda revisar
   - Se tem pouco tempo → recomenda Pomodoro
   - Se dorme pouco → avisa sobre impacto no aprendizado

3. **Distribuir inteligentemente**:
   - Disciplinas de alta prioridade em horários principais
   - Revisão em horários no ônibus
   - Descanso nos fins de semana

---

## 💡 Dicas de Ouro

### ✅ Faça
- ✓ Preencha horários reais (não ideais)
- ✓ Revise a rotina regularmente
- ✓ Use técnica Pomodoro (25min estudo + 5min pausa)
- ✓ Estude em local fixo (menos distrações)
- ✓ Pratique o que aprendeu (aprendizado ativo)

### ❌ Evite
- ✗ Planejar mais do que consegue fazer
- ✗ Ficar muito tempo em uma disciplina
- ✗ Estudar cansado
- ✗ Pular refeições ou sono
- ✗ Deixar para estudar na última hora

---

## 📱 Responsividade

A aplicação funciona perfeitamente em:
- 📱 **Smartphones** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktops** (1024px+)

Tudo responsivo e otimizado!

---

## 🛠️ Stack Tecnológico

| Tecnologia | O que faz |
|---|---|
| **Next.js** | Framework React moderno |
| **TypeScript** | Tipagem segura |
| **Tailwind CSS** | Estilos responsivos |
| **Recharts** | Gráficos interativos |
| **Radix UI** | Componentes acessíveis |
| **Lucide React** | Ícones bonitos |

---

## 📚 Estrutura de Arquivos

```
unidade_2/atividade_07/
├── app/
│   ├── layout.tsx          ← Layout geral
│   ├── page.tsx            ← Página principal
│   └── globals.css         ← Estilos globais
├── components/
│   ├── ScheduleForm.tsx    ← Formulário de horários
│   ├── TimeAnalyzer.tsx    ← Análise com gráficos
│   ├── RoutinePlan.tsx     ← Plano de estudos
│   └── ui/                 ← Componentes UI
├── lib/
│   └── utils.ts            ← Utilidades
└── package.json            ← Dependências
```

---

## 🐛 Troubleshooting

### Erro: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
# Usa porta 3001 ao invés
```

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Aplicação lenta
```bash
npm run build
npm start
# Usa versão otimizada
```

---

## 🚀 Próximos Passos

1. ✅ Teste em dispositivos diferentes
2. ✅ Refine seus horários baseado em uma semana real
3. ✅ Siga o plano gerado
4. ✅ Avalie efetividade após 2 semanas
5. ✅ Ajuste disciplinas conforme necessário

---

## 🎓 Aprendizado

Este projeto demonstra:
- ✓ **Engenharia de Prompts**: Recomendações com IA
- ✓ **UX/UI Responsiva**: Design moderno e acessível
- ✓ **Desenvolvimento Full-Stack**: Frontend completo
- ✓ **Problema Real**: Otimização de rotina de estudos

---

## 📞 Suporte

Dúvidas? Verifique:
1. README.md (visão geral)
2. Este arquivo (instruções)
3. Código comentado nos componentes

---

**Pronto para otimizar seus estudos? 🚀 Comece agora!**

---

*Atividade 07 - Engenharia de Prompts e Aplicações de IA*  
*Autor: João Zinfânio*  
*Curso: Ciências da Computação - 2026.1*
