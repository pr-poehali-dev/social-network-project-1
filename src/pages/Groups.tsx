import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import GroupsList from '@/components/GroupsList';
import GroupView from '@/components/GroupView';

const Groups = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        {selectedGroupId ? (
          <GroupView groupId={selectedGroupId} onBack={() => setSelectedGroupId(null)} />
        ) : (
          <GroupsList onGroupClick={setSelectedGroupId} />
        )}
      </main>
    </div>
  );
};

export default Groups;
