// Dados da aplicação
let atividades = JSON.parse(localStorage.getItem('atividades')) || [];

// Elementos do DOM
const inputAtividade = document.getElementById('atividade');
const inputHoras = document.getElementById('horas');
const selectCategoria = document.getElementById('categoria');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaAtividades = document.getElementById('listaAtividades');
const btnLimpar = document.getElementById('btnLimpar');
const btnExportar = document.getElementById('btnExportar');
const alertContainer = document.getElementById('alertContainer');

// Elementos de resumo
const totalHoras = document.getElementById('totalHoras');
const tempoLivre = document.getElementById('tempoLivre');
const sonoHoras = document.getElementById('sonoHoras');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Event Listeners
btnAdicionar.addEventListener('click', adicionarAtividade);
btnLimpar.addEventListener('click', limparTudo);
btnExportar.addEventListener('click', exportarRotina);

// Enter key para adicionar
inputAtividade.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarAtividade();
});

inputHoras.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarAtividade();
});

// Função para adicionar atividade
function adicionarAtividade() {
    const nome = inputAtividade.value.trim();
    const horas = parseFloat(inputHoras.value);
    const categoria = selectCategoria.value;

    // Validações
    if (!nome) {
        mostrarAlerta('Por favor, insira uma atividade', 'danger');
        return;
    }

    if (isNaN(horas) || horas <= 0) {
        mostrarAlerta('Por favor, insira uma quantidade de horas válida', 'danger');
        return;
    }

    if (horas > 24) {
        mostrarAlerta('Uma atividade não pode ter mais de 24 horas', 'danger');
        return;
    }

    if (!categoria) {
        mostrarAlerta('Por favor, selecione uma categoria', 'danger');
        return;
    }

    // Calcular total antes de adicionar
    const totalAntes = atividades.reduce((sum, ativ) => sum + ativ.horas, 0);
    const totalDepois = totalAntes + horas;

    // ALERTA 1: Verificar se vai passar de 24 horas
    if (totalDepois > 24) {
        mostrarAlerta('⚠️ AVISO: Isso somará ' + totalDepois.toFixed(1) + ' horas! O dia tem apenas 24 horas. Redimensione suas atividades.', 'danger');
        return;
    }

    // ALERTA 2: Verificar sono
    const sonoAtual = atividades.find(a => a.categoria === 'sono')?.horas || 0;
    if (categoria === 'sono' && (sonoAtual + horas) < 8) {
        mostrarAlerta('⏰ AVISO DE SONO: O tempo de sono não deve ser inferior a 8 horas! Você está planejando apenas ' + (sonoAtual + horas).toFixed(1) + ' horas.', 'warning');
        // Não retorna, apenas avisa
    }

    // Se atualizar uma atividade de sono existente
    if (categoria === 'sono') {
        const atividadeSono = atividades.find(a => a.categoria === 'sono');
        if (atividadeSono && horas < 8) {
            mostrarAlerta('⏰ AVISO DE SONO: O tempo de sono não deve ser inferior a 8 horas!', 'warning');
        }
    }

    // Criar nova atividade
    const atividade = {
        id: Date.now(),
        nome,
        horas,
        categoria
    };

    atividades.push(atividade);
    salvarNoLocalStorage();
    atualizarInterface();
    limparFormulario();
    mostrarAlerta('✅ Atividade adicionada com sucesso!', 'success');
}

// Função para remover atividade
function removerAtividade(id) {
    atividades = atividades.filter(a => a.id !== id);
    salvarNoLocalStorage();
    atualizarInterface();
    mostrarAlerta('✓ Atividade removida', 'success');
}

// Função para atualizar interface
function atualizarInterface() {
    atualizarLista();
    atualizarResumo();
}

// Função para atualizar lista de atividades
function atualizarLista() {
    if (atividades.length === 0) {
        listaAtividades.innerHTML = '<p class="empty-message">Nenhuma atividade adicionada ainda. Comece a planejar seu dia!</p>';
        return;
    }

    listaAtividades.innerHTML = atividades.map(ativ => `
        <div class="atividade-item ${ativ.categoria}">
            <div class="atividade-info">
                <div class="atividade-nome">${ativ.nome}</div>
                <span class="atividade-categoria">${formatarCategoria(ativ.categoria)}</span>
            </div>
            <div class="atividade-horas">${ativ.horas.toFixed(1)}h</div>
            <button class="btn-remover" onclick="removerAtividade(${ativ.id})">🗑️ Remover</button>
        </div>
    `).join('');
}

// Função para atualizar resumo
function atualizarResumo() {
    const total = atividades.reduce((sum, ativ) => sum + ativ.horas, 0);
    const livre = 24 - total;
    const sono = atividades.find(a => a.categoria === 'sono')?.horas || 0;

    // Atualizar números
    totalHoras.innerHTML = `${total.toFixed(1)}<span>h</span>`;
    tempoLivre.innerHTML = `${livre.toFixed(1)}<span>h</span>`;
    sonoHoras.innerHTML = `${sono.toFixed(1)}<span>h</span>`;

    // Atualizar progress bar
    const percentual = (total / 24) * 100;
    progressBar.style.width = percentual + '%';
    
    // Adicionar valor percentual na barra se houver espaço
    if (percentual > 15) {
        progressBar.textContent = percentual.toFixed(0) + '%';
    } else {
        progressBar.textContent = '';
    }

    progressText.textContent = `${percentual.toFixed(0)}% do dia planejado`;

    // Validações críticas
    if (total === 24) {
        mostrarAlerta('🎯 Seu dia está 100% planejado! 24 horas alocadas.', 'info');
    }

    if (sono > 0 && sono < 8) {
        mostrarAlerta('⏰ ALERTA DE SONO: Você está dormindo apenas ' + sono.toFixed(1) + ' horas. O recomendado é 8 horas!', 'warning');
    }

    // Mudar cor da barra de progresso
    if (percentual > 100) {
        progressBar.style.background = 'linear-gradient(90deg, #f44336, #d32f2f)';
    } else if (percentual === 100) {
        progressBar.style.background = 'linear-gradient(90deg, #4caf50, #45a049)';
    } else if (percentual > 80) {
        progressBar.style.background = 'linear-gradient(90deg, #ff9800, #f57c00)';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, #6c63ff, #f093fb)';
    }
}

// Função para limpar tudo
function limparTudo() {
    if (atividades.length === 0) {
        mostrarAlerta('Não há atividades para limpar', 'info');
        return;
    }

    if (confirm('Tem certeza que deseja limpar todas as atividades? Esta ação não pode ser desfeita.')) {
        atividades = [];
        salvarNoLocalStorage();
        atualizarInterface();
        mostrarAlerta('✓ Todas as atividades foram removidas', 'success');
    }
}

// Função para exportar rotina
function exportarRotina() {
    if (atividades.length === 0) {
        mostrarAlerta('Nenhuma atividade para exportar', 'info');
        return;
    }

    const total = atividades.reduce((sum, ativ) => sum + ativ.horas, 0);
    const sono = atividades.find(a => a.categoria === 'sono')?.horas || 0;
    const livre = 24 - total;

    let txt = '📅 ROTINA DIÁRIA\n';
    txt += '================\n\n';
    txt += 'Data: ' + new Date().toLocaleDateString('pt-BR') + '\n\n';
    txt += 'ATIVIDADES:\n';
    txt += '-----------\n';

    atividades.forEach(ativ => {
        txt += `• ${ativ.nome}: ${ativ.horas.toFixed(1)}h (${formatarCategoria(ativ.categoria)})\n`;
    });

    txt += '\n-----------\n';
    txt += `Total Planejado: ${total.toFixed(1)}h\n`;
    txt += `Tempo Livre: ${livre.toFixed(1)}h\n`;
    txt += `Sono: ${sono.toFixed(1)}h\n`;
    txt += `\n${sono >= 8 ? '✅ Sono adequado' : '⚠️ Sono insuficiente'}\n`;
    txt += `${total === 24 ? '✅ Dia 100% planejado' : total > 24 ? '❌ Dia ultrapassado' : '✓ Tempo disponível'}\n`;

    // Criar blob e download
    const blob = new Blob([txt], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rotina_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    mostrarAlerta('📥 Rotina exportada com sucesso!', 'success');
}

// Função para mostrar alerta
function mostrarAlerta(mensagem, tipo = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert ${tipo}`;
    alert.innerHTML = `
        <span class="alert-message">${mensagem}</span>
        <button class="alert-close" onclick="this.parentElement.remove()">✕</button>
    `;

    alertContainer.appendChild(alert);

    // Auto remove após 5 segundos (ou 8 para warnings)
    const tempo = tipo === 'warning' ? 8000 : 5000;
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, tempo);
}

// Função para limpar formulário
function limparFormulario() {
    inputAtividade.value = '';
    inputHoras.value = '';
    selectCategoria.value = '';
    inputAtividade.focus();
}

// Função para formatar categoria
function formatarCategoria(categoria) {
    const categorias = {
        trabalho: '💼 Trabalho',
        sono: '😴 Sono',
        faculdade: '🎓 Faculdade',
        estudo: '📚 Estudo',
        lazer: '🎮 Lazer',
        refeicoes: '🍽️ Refeições',
        higiene: '🧼 Higiene/Saúde',
        outro: '📌 Outro'
    };
    return categorias[categoria] || categoria;
}

// Função para salvar no localStorage
function salvarNoLocalStorage() {
    localStorage.setItem('atividades', JSON.stringify(atividades));
}

// Inicializar interface ao carregar
window.addEventListener('DOMContentLoaded', () => {
    atualizarInterface();
    if (atividades.length > 0) {
        mostrarAlerta('✓ Rotina carregada do histórico', 'success');
    }
});

// Validação em tempo real do campo de horas
inputHoras.addEventListener('input', () => {
    const valor = parseFloat(inputHoras.value);
    if (valor > 24) {
        inputHoras.value = '24';
        mostrarAlerta('Máximo de 24 horas por atividade', 'warning');
    }
});

// Verificação de sono quando mudar categoria
selectCategoria.addEventListener('change', () => {
    if (selectCategoria.value === 'sono') {
        const sonoExistente = atividades.find(a => a.categoria === 'sono');
        if (sonoExistente) {
            mostrarAlerta('Você já tem uma atividade de sono. Considere remover a anterior antes de adicionar outra.', 'info');
        }
    }
});
