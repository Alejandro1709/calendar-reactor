'use client';

import { useState } from 'react';
import useModal from '@/hooks/useModal';

function Modal() {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const { isOpen, closeModal } = useModal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!content || !file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'my-uploads');

    const cludinaryRes = await fetch(
      'https://api.cloudinary.com/v1_1/dn79mzc6d/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    const cloudinaryData = await cludinaryRes.json();

    const data = {
      content: content,
      file: cloudinaryData.secure_url,
    };

    const res = await fetch('/api/schedules', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const dataa = await res.json();

    console.log(dataa);

    if (res.ok) {
      setLoading(false);
      closeModal();
    }
  };

  return (
    <div className='flex justify-center items-center absolute z-40 top-0 right-0 bottom-0 left-0 bg-black/80'>
      <dialog
        open={isOpen}
        className='flex flex-col gap-4 bg-white rounded-md p-4'
      >
        <h1 className='text-3xl font-medium'>Submit your schedule!</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Describe your schedule</label>
            <input
              className='p-2 border'
              name='content'
              type='text'
              id='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='file'>Upload your schedule</label>
            <input
              name='file'
              className='p-2 border'
              type='file'
              id='file'
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setFile((e.target as HTMLInputElement).files![0])
              }
            />
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <button
              className='bg-blue-600 text-white rounded-md p-2 hover:bg-blue-500 disabled:bg-blue-200 disabled:hover:bg-blue-200'
              disabled={loading}
            >
              Submit
            </button>
            <button
              className='bg-gray-600 text-white rounded-md p-2 hover:bg-gray-500'
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
