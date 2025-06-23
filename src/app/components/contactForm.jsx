"use client";

export default function ContactForm() {
  return (
    <form className='flex flex-col gap-6 mt-4'>
      <div>
        <label className='block mb-1 font-semibold' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          id='email'
          placeholder='Please enter your email'
          className='w-full px-4 py-3 rounded shadow-sm focus:outline-none text-black bg-white'
        />
      </div>

      <div>
        <label className='block mb-1 font-semibold' htmlFor='mobile'>
          Mobile
        </label>
        <input
          type='tel'
          id='mobile'
          placeholder='Enter mobile'
          className='w-full px-4 py-3 rounded shadow-sm focus:outline-none text-black bg-white'
        />
      </div>

      <div>
        <label className='block mb-1 font-semibold' htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          rows='5'
          placeholder='Enter your message'
          className='w-full px-4 py-3 rounded shadow-sm focus:outline-none text-black bg-white resize-none'
        />
      </div>
      <button
        type='submit'
        className='text-base inline-block bg-[#3F8E00] text-white px-6 py-3 rounded hover:bg-[#62BA1B] transition-colors ring-1 ring-[#62BA1B]'
        style={{
          boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.3)",
        }}
      >
        Submit&nbsp;&gt;
      </button>
    </form>
  );
}
