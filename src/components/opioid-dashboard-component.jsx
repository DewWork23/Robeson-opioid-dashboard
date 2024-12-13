// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Real data from Robeson County based on the NC Opioid Settlement Dashboard
const overdoseData = [
  { year: "2019", deaths: 45, edVisits: 220, illicitInvolvement: 65 },
  { year: "2020", deaths: 82, edVisits: 380, illicitInvolvement: 75 },
  { year: "2021", deaths: 97, edVisits: 469, illicitInvolvement: 82 },
];

const comparisonData = [
  { metric: "Death Rate", robeson: 97, stateAverage: 39 },
  { metric: "Emergency Dept Rate", robeson: 469, stateAverage: 161 },
  { metric: "Illicit Drug %", robeson: 82, stateAverage: 78 },
];

const OpioidDashboard = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center py-4 mb-4 md:text-3xl">
            Robeson County Opioid Crisis Analytics (2021-2022)
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Overdose Trends */}
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4 text-center md:text-2xl">
                Robeson County Overdose Trends (per 100k people)
              </h3>
              <div className="w-full" style={{ height: 'min(300px, 50vh)' }}>
                <ResponsiveContainer>
                  <LineChart data={overdoseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="deaths"
                      stroke="#dc2626"
                      name="Overdose Deaths"
                    />
                    <Line
                      type="monotone"
                      dataKey="edVisits"
                      stroke="#2563eb"
                      name="Emergency Department Visits"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <p className="font-bold text-center">2021 Numbers:</p>
                <div>
                  <p className="text-sm md:text-base">&bull; 127 people died from overdose (rate: 97 per 100,000 residents)</p>
                  <p className="text-sm md:text-base">&bull; 612 people visited emergency rooms for overdose (rate: 469 per 100,000 residents)</p>
                </div>
              </div>
            </Card>

            {/* County vs State Comparison */}
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4 text-center md:text-2xl">
                Robeson County vs North Carolina Average (2021)
              </h3>
              <div className="w-full" style={{ height: 'min(300px, 50vh)' }}>
                <ResponsiveContainer>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="robeson" fill="#dc2626" name="Robeson County" />
                    <Bar dataKey="stateAverage" fill="#2563eb" name="North Carolina Average" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <p className="font-bold text-center">2021 Robeson vs. North Carolina:</p>
                <div>
                  <p className="text-sm md:text-base">&bull; Overdose deaths: Robeson had 97 per 100,000 residents vs. North Carolina's 39</p>
                  <p className="text-sm md:text-base">&bull; Emergency room visits: Robeson had 469 per 100,000 residents vs. North Carolina's 161</p>
                  <p className="text-sm md:text-base">&bull; Illicit drugs were involved in 82% of Robeson's overdoses vs. 78% statewide</p>
                </div>
              </div>
            </Card>

            {/* Key Metrics */}
            <Card className="md:col-span-2 p-4">
              <h3 className="text-xl font-bold mb-4 text-center md:text-2xl">
                2021 Key Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-red-100 p-4 rounded">
                  <p className="text-red-800 text-sm md:text-base">Overdose Deaths</p>
                  <p className="text-xl font-bold text-red-900">127</p>
                  <p className="text-sm text-red-800">97 per 100k people</p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                  <p className="text-blue-800 text-sm md:text-base">Emergency Department Visits</p>
                  <p className="text-xl font-bold text-blue-900">612</p>
                  <p className="text-sm text-blue-800">469 per 100k people</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded">
                  <p className="text-yellow-800 text-sm md:text-base">Illicit Drug Involvement</p>
                  <p className="text-xl font-bold text-yellow-900">82%</p>
                  <p className="text-sm text-yellow-800">of overdose deaths</p>
                </div>
                <div className="bg-green-100 p-4 rounded">
                  <p className="text-green-800 text-sm md:text-base">Prescribed Opioids</p>
                  <p className="text-xl font-bold text-green-900">22,350</p>
                  <p className="text-sm text-green-800">17% of population</p>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpioidDashboard;