// src/components/members/MembersManager.tsx
'use client';
import React, { useEffect, useState } from 'react';
import MemberForm from './MemberForm';
import MemberList from './MemberList';
import MemberStats from './MemberStats';
import { Member } from '@/lib/types';
import Button from '@/components/ui/Button';

export default function MembersManager() {
  const [members, setMembers] = useState<Member[]>([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (members.length > 0) return;
    const seed: Member = {
      id: 'seed-1',
      name: 'Aaroh Bhardwaj',
      email: 'aaroh@example.com',
      phone: '+91 98765 43210',
      linkedin: undefined,
      referredBy: undefined,
      membership: 'Active',
      sports: ['Tennis'],
      joiningReason: 'Loves the community',
      contribution: 'Experienced player',
      createdAt: new Date().toISOString(),
    };
    setMembers([seed]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addMember(m: Member) {
    setMembers(prev => [m, ...prev]);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Members</h2>
          <p className="text-sm text-gray-500">Manage members and membership types (local state only — v0).</p>
        </div>

        <div>
          <Button onClick={() => setShowAdd(true)}>Add Member</Button>
        </div>
      </div>

      <MemberStats members={members} />

      <MemberList members={members} />

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/40" onClick={() => setShowAdd(false)} />
          <div className="relative z-10 w-full max-w-4xl p-6">
            {/* Modal content: make it scrollable and with constrained height */}
            <div className="bg-[color:var(--color-background)] rounded-2xl shadow-lg max-h-[90vh] overflow-auto">
              <div className="p-6">
                <MemberForm onAdd={addMember} onClose={() => setShowAdd(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
