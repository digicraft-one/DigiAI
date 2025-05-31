'use client';

import { useEffect, useState } from 'react';
import FlowEditor from '../components/FlowEditor';
import Sidebar from '../components/ui/Sidebar';
import Topbar from '../components/ui/Topbar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // This ensures hydration issues are avoided
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 h-full">
          <FlowEditor />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}