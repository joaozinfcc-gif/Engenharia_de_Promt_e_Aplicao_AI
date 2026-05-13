'use client';

import { useState, useMemo } from 'react';
import { calculateAvailableTime, generateWeeklyRoutine } from '@/lib/utils';

interface RoutinePlanProps {
  schedule: {
    sleep: number;
    work: number;
    classes: number;
    commute: number;
    meals: number;
  };
  disciplines: any[];
  onDisciplinesChange: (disciplines: any[]) => void;
}

const locations = ['Casa', 'Ônibus', 'Faculdade', 'Trabalho'];
const priorities = ['Alta', 'Média', 'Baixa'];

export default function RoutinePlan({
  schedule,
  disciplines,
  onDisciplinesChange,
}: RoutinePlanProps) {
  const [name, setName] = useState('');
  const [hours, setHours] = useState(1);
  const [priority, setPriority] = useState('Média');
  const [location, setLocation] = useState('Casa');

  const availableTime = calculateAvailableTime(schedule);
  const weeklyRoutine = useMemo(
    () => generateWeeklyRoutine(disciplines),
    [disciplines]
  );

  const handleAddDiscipline = () => {
    if (name.trim()) {
      const newDiscipline = {
        id: Date.now(),
        name,
        weeklyHours: hours,
        priority: priority.toLowerCase(),
        location,
      };
      onDisciplinesChange([...disciplines, newDiscipline]);
      setName('');
      setHours(1);
      setPriority('Média');
      setLocation('Casa');
    }
  };

  const handleRemoveDiscipline = (id: number) => {
    onDisciplinesChange(disciplines.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-700 font-semibold">
          📚 Adicione suas disciplinas e receba um plano de estudo automático
        </p>
      </div>

      {/* Available Time Info */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <p className="text-green-800 font-semibold">
          ✅ Tempo disponível para estudo: <span className="text-2xl">{availableTime.toFixed(1)}h/dia</span>
        </p>
      </div>

      {/* Add Discipline Form */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">➕ Adicionar Disciplina</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nome da Disciplina
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Algoritmos, Cálculo I"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Horas por Semana
            </label>
            <input
              type="number"
              min="0.5"
              max="20"
              step="0.5"
              value={hours}
              onChange={(e) => setHours(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Prioridade
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Onde Estudar
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleAddDiscipline}
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Adicionar Disciplina
        </button>
      </div>

      {/* Disciplines List */}
      {disciplines.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">📋 Suas Disciplinas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disciplines.map((discipline) => (
              <div key={discipline.id} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{discipline.name}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      ⏱️ {discipline.weeklyHours}h/semana
                    </p>
                    <p className="text-sm text-gray-600">
                      🎯 Prioridade: <span className="capitalize font-semibold">{discipline.priority}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      📍 Local: {discipline.location}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveDiscipline(discipline.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xl"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weekly Routine */}
      {disciplines.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">📅 Rotina Semanal Gerada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(weeklyRoutine).map(([day, activities]: [string, any]) => (
              activities.length > 0 && (
                <div key={day} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">{day}</h4>
                  <div className="space-y-2">
                    {activities.map((activity: any, idx: number) => (
                      <div key={idx} className="bg-white p-2 rounded text-sm">
                        <p className="font-semibold text-gray-800">{activity.name}</p>
                        <p className="text-gray-600 text-xs">
                          {activity.hours.toFixed(1)}h • {activity.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {disciplines.length > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded space-y-2">
          <p className="text-sm text-gray-700 font-semibold">💡 Dicas de Estudo Eficiente:</p>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Use técnica Pomodoro: 25min estudo + 5min pausa</li>
            <li>Revise o conteúdo 24h, 1 semana e 1 mês depois</li>
            <li>Pratique o conhecimento (aprendizado ativo)</li>
            <li>Estude em um local fixo e livre de distrações</li>
            <li>Durma bem: sono afeta a retenção de informações</li>
          </ul>
        </div>
      )}
    </div>
  );
}
