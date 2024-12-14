// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card-component.jsx";
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

// All other data constants remain the same
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

const settlementData = [
  { year: 'FY 22-23', amount: 1100000, type: 'Past fiscal year payment' },
  { year: 'FY 23-24', amount: 2400000, type: 'Past fiscal year payment' },
  { year: 'FY 24-25', amount: 1300000, type: 'Current fiscal year payment' },
  { year: 'FY 25-26', amount: 1300000, type: 'Future fiscal year payment' },
  { year: 'FY 26-27', amount: 1000000, type: 'Future fiscal year payment' },
  { year: 'FY 27-28', amount: 800000, type: 'Future fiscal year payment' },
  { year: 'FY 28-29', amount: 1100000, type: 'Future fiscal year payment' },
  { year: 'FY 29-30', amount: 1100000, type: 'Future fiscal year payment' },
  { year: 'FY 30-31', amount: 1000000, type: 'Future fiscal year payment' },
  { year: 'FY 31-32', amount: 950000, type: 'Future fiscal year payment' },
  { year: 'FY 32-33', amount: 870000, type: 'Future fiscal year payment' },
  { year: 'FY 33-34', amount: 690000, type: 'Future fiscal year payment' },
  { year: 'FY 34-35', amount: 650000, type: 'Future fiscal year payment' },
  { year: 'FY 35-36', amount: 650000, type: 'Future fiscal year payment' },
  { year: 'FY 36-37', amount: 540000, type: 'Future fiscal year payment' },
  { year: 'FY 37-38', amount: 390000, type: 'Future fiscal year payment' },
  { year: 'FY 38-39', amount: 390000, type: 'Future fiscal year payment' }
];

const OpioidDashboard = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', padding: '20px', backgroundColor: '#ffffff' }}>
      <Card>
        <CardHeader>
          <CardTitle style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            fontWeight: 'bold',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            Robeson County Opioid Crisis Analytics (2021-2022)
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div style={{ 
            display: 'grid', 
            gap: '30px', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {/* Settlement Funds Chart */}
            <Card style={{ padding: '20px', gridColumn: 'span 2' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem', 
                textAlign: 'center' 
              }}>
                Opioid Settlement Funds Distribution (2022-2038)
              </h3>
              <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                  <BarChart 
                    data={settlementData}
                    margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year"
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${(value/1000000).toFixed(1)}M`}
                      domain={[0, 2400000]}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                      labelFormatter={(label) => `Fiscal Year: ${label}`}
                    />
                    <Bar 
                      dataKey="amount" 
                      fill="#000000"
                      name="Settlement Amount"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Total Settlement: ${(16417753).toLocaleString()}
                </p>
              </div>
            </Card>

            {/* Rest of the cards - styling updated for consistency */}
            {/* Overdose Trends */}
            <Card style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                Robeson County Overdose Trends (per 100k people)
              </h3>
              <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                  <LineChart 
                    data={overdoseData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
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
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem' }}>2021 Numbers:</p>
                <div style={{ textAlign: 'left' }}>
                  <p>&bull; 127 people died from overdose (rate: 97 per 100,000 residents)</p>
                  <p>&bull; 612 people visited emergency rooms for overdose (rate: 469 per 100,000 residents)</p>
                </div>
              </div>
            </Card>

            {/* County vs State Comparison */}
            <Card style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                Robeson County vs North Carolina Average (2021)
              </h3>
              <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                  <BarChart 
                    data={comparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
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
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem' }}>2021 Robeson vs. North Carolina:</p>
                <div style={{ textAlign: 'left' }}>
                  <p>&bull; Overdose deaths: Robeson had 97 per 100,000 residents vs. North Carolina&apos;s 39</p>
                  <p>&bull; Emergency room visits: Robeson had 469 per 100,000 residents vs. North Carolina&apos;s 161</p>
                  <p>&bull; Illicit drugs were involved in 82% of Robeson&apos;s overdoses vs. 78% statewide</p>
                </div>
              </div>
            </Card>

            {/* Key Metrics */}
            <Card style={{ padding: '20px', gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                2021 Key Statistics
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                <div style={{ backgroundColor: '#fee2e2', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ color: '#991b1b', marginBottom: '0.5rem' }}>Overdose Deaths</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#7f1d1d', marginBottom: '0.5rem' }}>127</p>
                  <p style={{ fontSize: '0.875rem', color: '#991b1b' }}>97 per 100k people</p>
                </div>
                <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ color: '#1e40af', marginBottom: '0.5rem' }}>Emergency Department Visits</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>612</p>
                  <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>469 per 100k people</p>
                </div>
                <div style={{ backgroundColor: '#fef9c3', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ color: '#854d0e', marginBottom: '0.5rem' }}>Illicit Drug Involvement</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#713f12', marginBottom: '0.5rem' }}>82%</p>
                  <p style={{ fontSize: '0.875rem', color: '#854d0e' }}>of overdose deaths</p>
                </div>
                <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ color: '#166534', marginBottom: '0.5rem' }}>Prescribed Opioids</p>
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#14532d', marginBottom: '0.5rem' }}>22,350</p>
                  <p style={{ fontSize: '0.875rem', color: '#166534' }}>17% of population</p>
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