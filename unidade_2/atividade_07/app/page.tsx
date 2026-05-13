'use client';

import { useState } from 'react';
import ScheduleForm from '@/components/ScheduleForm';
import TimeAnalyzer from '@/components/TimeAnalyzer';
import RoutinePlan from '@/components/RoutinePlan';

const tabs = [
  { id: 'schedule', label: '📅 Horários', icon: '⏰' },
  { id: 'analysis', label: '📊 Análise', icon: '📈' },
  { id: 'routine', label: '📚 Plano', icon: '📋' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [schedule, setSchedule] = useState({
    sleep: 8,
    work: 0,
    classes: 0,
    commute: 0,
    meals: 2,
  });
  const [disciplines, setDisciplines] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            📚 Estude Rotina
          </h1>
          <p className="text-gray-600 text-lg">
            Planejamento inteligente para sua rotina de estudos com IA
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-t-lg shadow-md flex flex-wrap border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-4 md:px-6 text-center font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white border-b-4 border-blue-600'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="inline-block md:inline text-xl md:text-base">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-lg shadow-md p-6 md:p-8 animate-fade-in">
          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <ScheduleForm schedule={schedule} onScheduleChange={setSchedule} />
          )}

          {/* Analysis Tab */}
          {activeTab === 'analysis' && (
            <TimeAnalyzer schedule={schedule} />
          )}

          {/* Routine Tab */}
          {activeTab === 'routine' && (
            <RoutinePlan
              schedule={schedule}
              disciplines={disciplines}
              onDisciplinesChange={setDisciplines}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600 text-sm">
        <p>
          💡 Dica: Preencha seus horários, veja a análise e crie seu plano de
          estudos!
        </p>
        <p className="mt-2">
          Engenharia de Prompts e Aplicações de IA - Atividade 07
        </p>
      </footer>
    </div>
  );
}
