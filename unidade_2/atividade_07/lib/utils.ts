// Funções utilitárias para a aplicação

export function calculateTotalCommitted(schedule: any): number {
  return (
    (schedule.sleep || 0) +
    (schedule.work || 0) +
    (schedule.classes || 0) +
    (schedule.commute || 0) +
    (schedule.meals || 0)
  );
}

export function calculateAvailableTime(schedule: any): number {
  const total = 24;
  const committed = calculateTotalCommitted(schedule);
  return Math.max(0, total - committed);
}

export function getRecommendations(schedule: any): string[] {
  const recommendations: string[] = [];
  const available = calculateAvailableTime(schedule);
  const sleep = schedule.sleep || 0;
  const commute = schedule.commute || 0;

  if (available < 1) {
    recommendations.push(
      "⚠️ Tempo muito limitado! Use técnica Pomodoro (25min estudo + 5min pausa)"
    );
  } else if (available < 2) {
    recommendations.push(
      "💡 Tempo moderado. Foque em revisão e prática ativa."
    );
  } else {
    recommendations.push(
      "✅ Ótimo tempo disponível! Use método de Pomodoro estendido."
    );
  }

  if (commute >= 1) {
    recommendations.push(
      "📚 Você tem tempo no deslocamento. Use para revisar notas e resumos."
    );
  }

  if (sleep < 7) {
    recommendations.push(
      "😴 Aviso: Menos de 7h de sono afeta concentração e aprendizado."
    );
  } else if (sleep > 9) {
    recommendations.push(
      "💤 Você está dormindo bastante. Considere aproveitar para estudar."
    );
  }

  return recommendations;
}

export function distributeStudyTime(
  disciplines: any[],
  totalAvailableHours: number
): any[] {
  const highPriority = disciplines.filter((d) => d.priority === "alta");
  const mediumPriority = disciplines.filter((d) => d.priority === "média");
  const lowPriority = disciplines.filter((d) => d.priority === "baixa");

  const distribution: any[] = [];

  // 60% para alta, 30% para média, 10% para baixa
  const highTotal = totalAvailableHours * 0.6;
  const mediumTotal = totalAvailableHours * 0.3;
  const lowTotal = totalAvailableHours * 0.1;

  const distributeByPriority = (items: any[], total: number) => {
    const perItem = total / (items.length || 1);
    return items.map((item) => ({
      ...item,
      weeklyHours: perItem,
    }));
  };

  return [
    ...distributeByPriority(highPriority, highTotal),
    ...distributeByPriority(mediumPriority, mediumTotal),
    ...distributeByPriority(lowPriority, lowTotal),
  ];
}

export function generateWeeklyRoutine(disciplines: any[]): any {
  const daysOfWeek = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  const routine: any = {};

  daysOfWeek.forEach((day, index) => {
    routine[day] = [];
  });

  // Distribuir disciplinas ao longo da semana
  disciplines.forEach((discipline, index) => {
    const dayIndex = index % 7;
    const day = daysOfWeek[dayIndex];
    const hoursPerSession = Math.max(0.5, discipline.weeklyHours / 3);

    routine[day].push({
      name: discipline.name,
      hours: hoursPerSession,
      location: discipline.location,
      priority: discipline.priority,
    });
  });

  return routine;
}
