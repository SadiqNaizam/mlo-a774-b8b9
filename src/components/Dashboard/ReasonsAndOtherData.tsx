import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ReasonData {
  percentage: number;
  reason: string;
}

const reasonsData: ReasonData[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' },
];

interface OtherDataStat {
  value: string;
  label: string;
  tooltip?: string;
}

const otherData: OtherDataStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days.' },
];

const ReasonsAndOtherData: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Reasons of leads lost Card */}
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-4">
            {reasonsData.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-primary-text">{item.percentage}%</p>
                <p className="text-secondary-text mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other data Card */}
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around items-center h-full pt-4">
            {otherData.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary-text">{stat.value}</p>
                <div className="flex items-center justify-center gap-1 mt-1 text-secondary-text">
                    <span>{stat.label}</span>
                    {stat.tooltip && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Info className="w-4 h-4 text-gray-400 cursor-pointer"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{stat.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsAndOtherData;
