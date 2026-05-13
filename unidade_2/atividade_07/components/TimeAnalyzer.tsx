'use client';

import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getRecommendations, calculateAvailableTime } from '@/lib/utils';

interface TimeAnalyzerProps {
  schedule: {
    sleep: number;
    work: number;
    classes: number;
    commute: number;
    meals: number;
  };
}

const COLORS = ['#8b5cf6', '#ef4444', '#3b82f6', '#eab308', '#10b981'];
const activityLabels: { [key: string]: string } = {
  sleep: 'Sono',
  work: 'Trabalho',
  classes: 'Aulas',
  commute: 'Deslocamento',
  meals: 'Refeições',
};

export default function TimeAnalyzer({ schedule }: TimeAnalyzerProps) {
  const availableTime = calculateAvailableTime(schedule);
  const recommendations = getRecommendations(schedule);

  const barChartData = useMemo(() => {
    return [
      { name: 'Sono', hours: schedule.sleep },
      { name: 'Trabalho', hours: schedule.work },
      { name: 'Aulas', hours: schedule.classes },
      { name: 'Deslocamento', hours: schedule.commute },
      { name: 'Refeições', hours: schedule.meals },
      { name: 'Para Estudar', hours: availableTime },
    ];
  }, [schedule, availableTime]);

  const pieChartData = useMemo(() => {
    return [
      { name: 'Sono', value: schedule.sleep },
      { name: 'Trabalho', value: schedule.work },
      { name: 'Aulas', value: schedule.classes },
      { name: 'Deslocamento', value: schedule.commute },
      { name: 'Refeições', value: schedule.meals },
      { name: 'Para Estudar', value: availableTime },
    ].filter((item) => item.value > 0);
  }, [schedule, availableTime]);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-700 font-semibold">
          📊 Veja sua análise visual e recomendações personalizadas
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
          <p className="text-blue-100 text-sm font-semibold">Total do Dia</p>
          <p className="text-4xl font-bold mt-2">24h</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-md">
          <p className="text-red-100 text-sm font-semibold">Comprometido</p>
          <p className="text-4xl font-bold mt-2">
            {(schedule.sleep + schedule.work + schedule.classes + schedule.commute + schedule.meals).toFixed(1)}h
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <p className="text-green-100 text-sm font-semibold">Para Estudar</p>
          <p className="text-4xl font-bold mt-2">{availableTime.toFixed(1)}h</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Comparação de Atividades</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🥧 Proporção do Dia</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}h`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">🤖 Recomendações com IA</h3>
        <div className="space-y-2">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-4 rounded"
            >
              <p className="text-gray-700 text-sm">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
