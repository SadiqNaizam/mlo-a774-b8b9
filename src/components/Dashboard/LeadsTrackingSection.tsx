import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

interface TrackingData {
  month: string;
  won: number;
  lost: number;
}

const leadsTrackingData: TrackingData[] = [
  { month: 'March', won: 65, lost: 88 },
  { month: 'April', won: 25, lost: 45 },
  { month: 'May', won: 68, lost: 95 },
  { month: 'June', won: 82, lost: 12 },
  { month: 'July', won: 95, lost: 42 },
  { month: 'August', won: 32, lost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded-md shadow-lg text-sm">
        <p className="label font-bold">{`${label}`}</p>
        <p className="text-teal-600">{`Closed won: ${payload[0].value}`}</p>
        <p className="text-red-500">{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingSection: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h2 className="text-xl font-semibold">Leads tracking</h2>
            <div className="mt-2 flex items-baseline gap-6">
              <p><span className="text-4xl font-bold">680</span> <span className="text-secondary-text">total closed</span></p>
              <p><span className="text-4xl font-bold">70</span> <span className="text-secondary-text">total lost</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="leads-converted">
              <TabsList className="bg-gray-200">
                <TabsTrigger value="leads-came">Leads came</TabsTrigger>
                <TabsTrigger value="leads-converted">Leads Converted</TabsTrigger>
                <TabsTrigger value="total-deals">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" className="text-secondary-text">
              <Calendar className="w-4 h-4 mr-2" />
              last 6 months
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsTrackingData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F766E" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0F766E" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="won" stroke="#0F766E" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#0F766E' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="lost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#EF4444' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm text-secondary-text">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-sm bg-teal-700 mr-2"></span>
            <span>Closed won</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-sm bg-red-500 mr-2"></span>
            <span>Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingSection;
