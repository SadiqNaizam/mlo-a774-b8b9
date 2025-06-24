```typescript
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Data for Funnel Count
interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

// Data for Sources Pie Chart
interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#0F766E' }, // teal-700
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#86EFAC' }, // green-300
];

const FunnelCountSection: React.FC = () => {
  const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Funnel Count Card */}
      <Card>
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <span className="text-5xl font-bold">600</span>
            <span className="ml-2 text-muted-foreground">active leads</span>
          </div>
          <div className="w-full h-3 rounded-full flex overflow-hidden mb-6">
            {funnelData.map((stage) => (
                <div key={stage.name} className={stage.color} style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }} />
            ))}
          </div>
          <div className="space-y-4 text-sm">
            {funnelData.map((stage) => (
              <div key={stage.name} className="grid grid-cols-4 items-center text-muted-foreground">
                <div className="flex items-center col-span-2 text-foreground">
                  <span className={`w-3 h-3 rounded-sm mr-3 ${stage.color}`}></span>
                  <span>{stage.name}</span>
                </div>
                <span className="text-foreground">{stage.count}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-right cursor-pointer text-foreground">{stage.name === 'In conversation' ? stage.duration : `$ ${stage.value}`}</span>
                    </TooltipTrigger>
                    {stage.name === 'In conversation' && <TooltipContent><p>{`$ ${stage.value}`}</p></TooltipContent>}
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sources Card */}
      <Card>
        <CardHeader>
            <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-48 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourcesData} dataKey="percentage" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={1}>
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}</Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
           <div className="space-y-3 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-3 items-center text-muted-foreground">
                <div className="flex items-center text-foreground">
                  <span className="w-3 h-3 rounded-sm mr-3" style={{backgroundColor: source.color}}></span>
                  <span>{source.name}</span>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="text-right cursor-pointer text-foreground">$ {source.value.toLocaleString()}</span>
                        </TooltipTrigger>
                        <TooltipContent><p>from leads total</p></TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span className="text-right text-foreground">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunnelCountSection;
```