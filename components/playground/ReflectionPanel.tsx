'use client';

import { useState } from 'react';
import { playgroundApi } from '@/lib/playground-api';

export default function ReflectionPanel(){

  const [executionId,setExecutionId]=useState('');
  const [tenantId,setTenantId]=useState('default');
  const [response,setResponse]=useState<any>();

  return(

    <div className="space-y-4">

      <input
        placeholder="Execution ID"
        value={executionId}
        onChange={e=>setExecutionId(e.target.value)}
      />

      <input
        placeholder="Tenant ID"
        value={tenantId}
        onChange={e=>setTenantId(e.target.value)}
      />

      <div className="flex gap-3">

        <button
          onClick={async()=>setResponse(await playgroundApi.reflect(executionId))}
        >
          Reflect
        </button>

        <button
          onClick={async()=>setResponse(await playgroundApi.reflectionHistory(tenantId,20))}
        >
          History
        </button>

        <button
          onClick={async()=>setResponse(await playgroundApi.reflectionAnalytics(tenantId,30))}
        >
          Analytics
        </button>

      </div>

      <pre>{JSON.stringify(response,null,2)}</pre>

    </div>
  );
}