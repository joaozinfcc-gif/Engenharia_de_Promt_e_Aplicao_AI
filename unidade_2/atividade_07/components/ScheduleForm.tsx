'use client';

import { useState } from 'react';

interface ScheduleFormProps {
  schedule: {
    sleep: number;
    work: number;
    classes: number;
    commute: number;
    meals: number;
  };
  onScheduleChange: (schedule: any) => void;
}

const activities = [
  { key: 'sleep', label: '😴 Sono', icon: '😴', color: 'bg-purple-100' },
  { key: 'work', label: '💼 Trabalho', icon: '💼', color: 'bg-red-100' },
  { key: 'classes', label: '🎓 Aulas', icon: '🎓', color: 'bg-blue-100' },
  { key: 'commute', label: '🚌 Deslocamento', icon: '🚌', color: 'bg-yellow-100' },
  { key: 'meals', label: '🍽️ Refeições', icon: '🍽️', color: 'bg-green-100' },
];

export default function ScheduleForm({
  schedule,
  onScheduleChange,
}: ScheduleFormProps) {
  const totalCommitted =
    schedule.sleep +
    schedule.work +
    schedule.classes +
    schedule.commute +
    schedule.meals;
  const availableForStudy = Math.max(0, 24 - totalCommitted);
  const percentage = Math.round((totalCommitted / 24) * 100);

  const handleChange = (key: string, value: number) => {
    onScheduleChange({
      ...schedule,
      [key]: Math.max(0, Math.min(24, value)),
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-700 font-semibold">
          📋 Preencha abaixo quantas horas você dedica a cada atividade diária
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div key={activity.key} className={`${activity.color} p-6 rounded-lg`}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {activity.label}
            </label>
            <div className="flex items-center justify-between">
              <input
                type="number"
                min="0"
                max="24"
                step="0.5"
                value={schedule[activity.key as keyof typeof schedule]}
                onChange={(e) =>
                  handleChange(activity.key, parseFloat(e.target.value) || 0)
                }
                className="text-2xl font-bold bg-white border-2 border-gray-300 rounded p-2 w-20 text-center focus:outline-none focus:border-blue-500"
              />
              <span className="text-gray-600 ml-2">horas</span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-700">
            Distribuição do Seu Dia
          </span>
          <span className="text-lg font-bold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${Math.min(100, percentage)}%` }}
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 text-sm font-semibold">Total Comprometido</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            {totalCommitted}h
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 text-sm font-semibold">Horas no Dia</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">24h</p>
        </div>
        <div
          className={`${
            availableForStudy >= 2 ? 'bg-green-100' : 'bg-orange-100'
          } p-4 rounded-lg`}
        >
          <p className="text-gray-600 text-sm font-semibold">Para Estudar</p>
          <p
            className={`text-3xl font-bold mt-2 ${
              availableForStudy >= 2 ? 'text-green-600' : 'text-orange-600'
            }`}
          >
            {availableForStudy.toFixed(1)}h
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">💡 Dica:</span> O ideal é dormir 7-9
          horas por noite. Quanto mais tempo disponível para estudar, melhor!
        </p>
      </div>
    </div>
  );
}
