'use client';

import { useState } from 'react';
import { playgroundApi } from '@/lib/playground-api';

export default function IdentityPanel() {
  const [identityId, setIdentityId] = useState('');
  const [identityType, setIdentityType] = useState('USER');
  const [profile, setProfile] = useState('{\n  "name":"Darshan"\n}');
  const [response, setResponse] = useState<any>();

  async function createIdentity() {
    const data = await playgroundApi.createIdentity({
      identityId,
      identityType,
      profile: JSON.parse(profile)
    });

    setResponse(data);
  }

  async function getIdentity() {
    const data = await playgroundApi.getIdentity(identityId);
    setResponse(data);
  }

  return (
    <div className="space-y-4">

      <input
        placeholder="Identity ID"
        value={identityId}
        onChange={e=>setIdentityId(e.target.value)}
        className="w-full rounded-lg bg-black/30 p-3"
      />

      <select
        value={identityType}
        onChange={e=>setIdentityType(e.target.value)}
        className="w-full rounded-lg bg-black/30 p-3"
      >
        <option>USER</option>
        <option>AGENT</option>
        <option>ORGANIZATION</option>
      </select>

      <textarea
        value={profile}
        onChange={e=>setProfile(e.target.value)}
        className="h-40 w-full rounded-lg bg-black/30 p-3 font-mono"
      />

      <div className="flex gap-3">
        <button onClick={createIdentity}>Create</button>
        <button onClick={getIdentity}>Get</button>
      </div>

      <pre>{JSON.stringify(response,null,2)}</pre>

    </div>
  );
}