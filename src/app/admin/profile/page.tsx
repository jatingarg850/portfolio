"use client";
import { useState } from "react";
import { ProtectedRoute } from '@/components/admin/protected-route';
import { AdminLayout } from '@/components/admin/admin-layout';

export default function AdminProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: ""
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save profile info to backend
    setEditing(false);
    alert("Profile updated!");
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-xl mx-auto py-10">
          <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Avatar URL</label>
              <input
                type="text"
                name="avatar"
                value={profile.avatar}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button type="submit" className="btn-primary">Save Changes</button>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
