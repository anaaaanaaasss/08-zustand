'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';

export default function NotesPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { data, isFetching } = useQuery({
    queryKey: ['notes', page],
    queryFn: () => fetchNotes(undefined, page, undefined, undefined),
  });

  const notes = data?.notes ?? [];

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>All Notes</h1>
      <NoteList notes={notes} isFetching={isFetching} />
    </>
  );
}