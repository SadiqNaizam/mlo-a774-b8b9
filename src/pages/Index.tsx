import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCountSection from '../components/Dashboard/FunnelCountSection';
import LeadsTrackingSection from '../components/Dashboard/LeadsTrackingSection';
import ReasonsAndOtherData from '../components/Dashboard/ReasonsAndOtherData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * The main dashboard overview page.
 * This page assembles all the primary dashboard components (organisms) into a cohesive view,
 * structured within the MainAppLayout.
 * It includes top-level navigation (Sales/Leads tabs) and arranges the data visualization sections.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="bg-transparent p-0 border-b rounded-none w-full justify-start">
          <TabsTrigger
            value="sales"
            className="pb-3 px-4 text-sm font-medium text-secondary-text rounded-none data-[state=active]:text-primary-text data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="pb-3 px-4 text-sm font-medium text-secondary-text rounded-none data-[state=active]:text-primary-text data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-6">
          <div className="flex items-center justify-center h-96 border rounded-lg bg-card">
            <p className="text-secondary-text">Sales data and visualizations would be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-6">
          <div className="space-y-6">
            <FunnelCountSection />
            <LeadsTrackingSection />
            <ReasonsAndOtherData />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
