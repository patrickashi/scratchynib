import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function FeedbackForm() {
  const [state, handleSubmit] = useForm("xovqqkzy"); // Replace with your Formspree form ID
  if (state.succeeded) {
      return <p>Thanks for your feedback!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-900">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-700">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="feedback" className="block text-sm font-monoton text-gray-700">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          required
          rows="4"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
        <ValidationError 
          prefix="Feedback" 
          field="feedback"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600  transition duration-200">
        Submit
      </button>
    </form>
  );
}

function Feedback() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
            <h1 className='animate-color-change mb-4 md:mb-0 text-3xl font-kablammo'>Submit Feedback</h1>
        </div>
        <div>
            <FeedbackForm />
        </div>
        
    </div>
  );
}

export default Feedback;
