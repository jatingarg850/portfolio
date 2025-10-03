'use client';

import { useState } from 'react';

export default function TestSkillsAPI() {
  const [result, setResult] = useState<string>('');
  const [skillId, setSkillId] = useState<string>('');

  const testGetSkills = async () => {
    try {
      const response = await fetch('/api/skills');
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  const testDeleteSkill = async () => {
    if (!skillId) {
      setResult('Please enter a skill ID');
      return;
    }

    try {
      const response = await fetch(`/api/skills/${skillId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      setResult(`Status: ${response.status}\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Skills API</h1>
      
      <div className="space-y-4">
        <button
          onClick={testGetSkills}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        >
          Get All Skills
        </button>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={skillId}
            onChange={(e) => setSkillId(e.target.value)}
            placeholder="Enter skill ID to delete"
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={testDeleteSkill}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete Skill
          </button>
        </div>
        
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
          {result}
        </pre>
      </div>
    </div>
  );
}