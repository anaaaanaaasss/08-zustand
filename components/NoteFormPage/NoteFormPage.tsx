'use client';

import NoteForm from '@/components/NoteForm/NoteForm';
import { useRouter } from 'next/navigation';

const categories = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'] as const;

export default function NoteFormPage() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log('Submitting note');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <NoteForm
      categories={[...categories]}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}