# 📚 Estude Rotina - Atividade 07

> Aplicação responsiva inteligente para otimizar sua rotina de estudos usando IA

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## 🎯 O Que é?

**Estude Rotina** é uma aplicação web progressiva (PWA) que ajuda você a:

✅ **Mapear seu tempo** - Cadastre todas suas atividades diárias  
✅ **Visualizar disponibilidade** - Veja quanto tempo realmente tem para estudar  
✅ **Receber recomendações com IA** - Dicas personalizadas e inteligentes  
✅ **Gerar plano automático** - Rotina otimizada para suas disciplinas  
✅ **Estudar em qualquer lugar** - Ônibus, faculdade, trabalho, casa  

---

## 📦 Funcionalidades

### 1️⃣ Aba de Horários 📅
- Cadastro de 5 atividades (sono, trabalho, aulas, deslocamento, refeições)
- Cálculo automático de tempo disponível
- Interface intuitiva com validações

### 2️⃣ Aba de Análise 📊
- 📊 **Gráfico de Barras** - Comparação visual de atividades
- 🥧 **Gráfico de Pizza** - Proporção do dia
- 📈 **Cards de Resumo** - Total, comprometido, para estudar
- 🤖 **Recomendações Inteligentes**:
  - Alertas automáticos
  - Dicas context-aware
  - Sugestões personalizadas

### 3️⃣ Aba de Plano 📚
- ➕ Adicione suas disciplinas
- 📍 Escolha onde estuda (Casa, Ônibus, Faculdade, Trabalho)
- 📅 Rotina semanal automática
- 💡 Dicas de estudo eficiente

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joaozinfcc-gif/Engenharia_de_Promt_e_Aplicao_AI.git

# Entre no diretório
cd unidade_2/atividade_07

# Instale as dependências
npm install
```

### Executar

```bash
# Desenvolvimento
npm run dev
# Acesse http://localhost:3000

# Build para produção
npm run build
npm start

# Lint
npm run lint
```

---

## 📖 Como Usar

### Passo 1: Preencher Horários
Na primeira aba, insira suas horas diárias:
- 😴 Sono (ideal 7-9h)
- 💼 Trabalho
- 🎓 Aulas
- 🚌 Deslocamento
- 🍽️ Refeições

Exemplo:
```
Sono: 8h
Trabalho: 8h
Aulas: 3h
Deslocamento: 2h
Refeições: 1.5h
───────────
Disponível: 1.5h para estudar ✅
```

### Passo 2: Analisar
Vá à aba **"Análise"** para ver:
- Gráficos visuais de sua distribuição
- Recomendações personalizadas
- Avisos importantes

### Passo 3: Criar Plano
Na aba **"Plano"**:
1. Adicione suas disciplinas
2. Defina horas/semana e prioridade
3. Escolha onde estudar
4. Veja sua rotina automática

**Exemplo:**
```
Segunda:
  📚 Algoritmos • 1h • Casa
  📚 Cálculo • 0.5h • Ônibus

Terça:
  📚 Algoritmos • 0.5h • Faculdade
  📚 Cálculo • 1h • Casa
```

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|---|---|---|
| **Next.js** | 14 | Framework React |
| **React** | 18 | Biblioteca UI |
| **TypeScript** | 5 | Tipagem segura |
| **Tailwind CSS** | 3 | Estilos responsivos |
| **Recharts** | 2 | Gráficos |
| **Radix UI** | 1 | Componentes acessíveis |
| **Lucide React** | 0.294 | Ícones |

---

## 📁 Estrutura de Diretórios

```
unidade_2/atividade_07/
├── 📄 README.md                    # Este arquivo
├── 📄 INSTRUÇÕES.md                # Guia detalhado
├── 📄 package.json                 # Dependências
├── 📄 tsconfig.json                # Config TypeScript
├── 📄 tailwind.config.js           # Config Tailwind
├── 📄 postcss.config.js            # Config PostCSS
├── 📄 next.config.js               # Config Next.js
├── 🔧 .gitignore
│
├── 📁 app/
│   ├── layout.tsx                  # Layout raiz
│   ├── page.tsx                    # Página principal (3 Tabs)
│   └── globals.css                 # Estilos globais
│
├── 🎨 components/
│   ├── ScheduleForm.tsx            # Formulário de horários
│   ├── TimeAnalyzer.tsx            # Análise com gráficos
│   ├── RoutinePlan.tsx             # Plano de estudos
│   │
│   └── ui/                         # Componentes reutilizáveis
│       ├── tabs.tsx                # Component Tabs
│       ├── card.tsx                # Component Card
│       ├── button.tsx              # Component Button
│       ├── input.tsx               # Component Input
│       └── label.tsx               # Component Label
│
└── 🔧 lib/
    └── utils.ts                    # Funções utilitárias
```

---

## 🤖 Engenharia de Prompts

A aplicação usa prompts inteligentes para:

### Análise de Padrão
```
Baseado em seus horários, a IA identifica:
- Quanto tempo real você tem
- Melhor momento para estudar
- Padrão de produtividade
```

### Recomendações Context-Aware
```
Se tempo no ônibus > 1h:
  → "Revise notas e resumos no caminho"

Se tempo total < 2h:
  → "Use Pomodoro: 25min estudo + 5min pausa"

Se sono < 7h:
  → "Atenção: Pouco sono afeta aprendizado"
```

### Distribuição Automática
```
- Disciplinas de alta prioridade → horários principais
- Revisão → ônibus/deslocamento
- Prática → casa
- Descanso → fins de semana
```

---

## 📱 Responsividade

A aplicação é **100% responsiva**:

| Dispositivo | Breakpoint | Status |
|---|---|---|
| 📱 Smartphone | 320px+ | ✅ Otimizado |
| 📱 Tablet | 768px+ | ✅ Otimizado |
| 💻 Desktop | 1024px+ | ✅ Otimizado |

---

## 🎓 Aprendizados Implementados

✅ **Engenharia de Prompts**: Recomendações com IA  
✅ **UX/UI Moderno**: Design limpo e acessível  
✅ **Desenvolvimento Full-Stack**: Frontend completo  
✅ **Responsividade**: Mobile-first design  
✅ **Visualização de Dados**: Gráficos interativos  
✅ **State Management**: React hooks  
✅ **TypeScript**: Código tipado e seguro  

---

## 💡 Dicas de Uso

### ✅ Faça
- ✓ Preencha horários reais
- ✓ Revise a rotina mensalmente
- ✓ Use técnica Pomodoro (25min + 5min pausa)
- ✓ Estude em local fixo
- ✓ Pratique (aprendizado ativo)

### ❌ Evite
- ✗ Planejar irrealisticamente
- ✗ Estudar muito tempo seguido
- ✗ Estudar cansado
- ✗ Pular sono ou refeições
- ✗ Deixar para última hora

---

## 🐛 Troubleshooting

### Porta em uso
```bash
npm run dev -- -p 3001
```

### Módulos não encontrados
```bash
rm -rf node_modules package-lock.json
npm install
```

### Aplicação lenta
```bash
npm run build
npm start
```

---

## 📊 Exemplos de Saída

### Cenário 1: Pouco Tempo
```
Horários:
- Sono: 8h
- Trabalho: 8h
- Aulas: 4h
- Deslocamento: 2h
- Refeições: 1.5h

Disponível: 0.5h ❌
Recomendação: Use ônibus para revisar!
```

### Cenário 2: Tempo Adequado
```
Horários:
- Sono: 8h
- Trabalho: 0h
- Aulas: 4h
- Deslocamento: 1h
- Refeições: 2h

Disponível: 9h ✅
Recomendação: Excelente! Use Pomodoro.
```

---

## 🔄 Fluxo da Aplicação

```
1. Usuário preenche horários
        ↓
2. App calcula tempo disponível
        ↓
3. IA analisa padrão
        ↓
4. Sistema gera recomendações
        ↓
5. Usuário adiciona disciplinas
        ↓
6. App cria rotina automática
        ↓
7. Usuário segue plano
        ↓
8. Avalia efetividade após 2 semanas
```

---

## 📈 Métricas de Sucesso

Após usar a aplicação por 2 semanas, verifique:
- ✓ Aumentou tempo de estudo?
- ✓ Melhorou as notas?
- ✓ Sente menos estresse?
- ✓ Conseguiu seguir o plano?
- ✓ Estudou mais nos horários livres?

---

## 🚀 Próximas Versões

- [ ] Integração com Google Calendar
- [ ] Notificações de lembretes
- [ ] Exportar plano em PDF
- [ ] Histórico de progresso
- [ ] Sincronização em nuvem
- [ ] Modo offline (PWA)

---

## 📝 Licença

MIT © 2026 João Zinfânio

---

## 👤 Autor

**João Zinfânio**  
🎓 Ciências da Computação - 2026.1  
📧 joaozinfcc@gmail.com  
🐙 [@joaozinfcc-gif](https://github.com/joaozinfcc-gif)

---

## 📞 Suporte

- 📖 Leia [INSTRUÇÕES.md](./INSTRUÇÕES.md) para guia completo
- 🔍 Veja o código comentado nos componentes
- 💬 Abra uma issue no repositório

---

**Pronto para otimizar seus estudos? 🚀**

```bash
npm install && npm run dev
```

---

*Engenharia de Prompts e Aplicações de IA - Atividade 07*
