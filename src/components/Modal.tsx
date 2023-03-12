'use client';

function Modal() {
  return (
    <div className='flex justify-center items-center absolute z-40 top-0 right-0 bottom-0 left-0 bg-black/80'>
      <dialog open className='flex flex-col gap-4 bg-white rounded-md p-4'>
        <h1 className='text-3xl font-medium'>Submit your schedule!</h1>
        <form className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Describe your schedule</label>
            <input className='p-2 border' type='text' id='content' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Describe your schedule</label>
            <input className='p-2 border' type='text' id='content' />
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <button className='bg-gray-600 text-white rounded-md p-2 hover:bg-gray-500'>
              Cancel
            </button>
            <button className='bg-blue-600 text-white rounded-md p-2 hover:bg-blue-500'>
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
