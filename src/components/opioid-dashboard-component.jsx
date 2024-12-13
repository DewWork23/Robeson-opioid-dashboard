// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card-component";
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
    <div style={{ width: '100%', minHeight: '100vh', padding: '20px' }}>
      <Card>
        <CardHeader>
          <CardTitle style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '2rem', 
            fontWeight: 'bold',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            Robeson County Opioid Crisis Analytics (2021-2022)
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Overdose Trends */}
            <Card style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                Robeson County Overdose Trends (per 100k people)
              </h3>
              <div style={{ width: '100%', height: '400px' }}>
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
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>2021 Numbers:</p>
                <div>
                  <p>&bull; 127 people died from overdose (rate: 97 per 100,000 residents)</p>
                  <p>&bull; 612 people visited emergency rooms for overdose (rate: 469 per 100,000 residents)</p>
                </div>
              </div>
            </Card>

            {/* County vs State Comparison */}
            <Card style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                Robeson County vs North Carolina Average (2021)
              </h3>
              <div style={{ width: '100%', height: '400px' }}>
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
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>2021 Robeson vs. North Carolina:</p>
                <div>
                  <p>&bull; Overdose deaths: Robeson had 97 per 100,000 residents vs. North Carolina's 39</p>
                  <p>&bull; Emergency room visits: Robeson had 469 per 100,000 residents vs. North Carolina's 161</p>
                  <p>&bull; Illicit drugs were involved in 82% of Robeson's overdoses vs. 78% statewide</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Metrics */}
          <Card style={{ marginTop: '20px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
              2021 Key Statistics
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#991b1b' }}>Overdose Deaths</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7f1d1d' }}>127</p>
                <p style={{ fontSize: '0.875rem', color: '#991b1b' }}>97 per 100k people</p>
              </div>
              <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#1e40af' }}>Emergency Department Visits</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>612</p>
                <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>469 per 100k people</p>
              </div>
              <div style={{ backgroundColor: '#fef9c3', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#854d0e' }}>Illicit Drug Involvement</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#713f12' }}>82%</p>
                <p style={{ fontSize: '0.875rem', color: '#854d0e' }}>of overdose deaths</p>
              </div>
              <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: '#166534' }}>Prescribed Opioids</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14532d' }}>22,350</p>
                <p style={{ fontSize: '0.875rem', color: '#166534' }}>17% of population</p>
              </div>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpioidDashboard;