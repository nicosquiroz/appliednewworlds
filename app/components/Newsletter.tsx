'use client'
import { FC } from 'react'

const Newsletter: FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
      });

      const successMessage = document.getElementById('mce-success-response');
      if (successMessage) {
        successMessage.style.display = 'block';
        form.style.display = 'none';
      }
      
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="my-8 rounded-lg">
      <div id="mce-success-response" style={{ display: 'none' }}>
        <h3 className="font-bold text-black">Newsletter</h3>
        <br/>
        <p className="text-sm text-gray-600">Get updates on new posts and insights</p>
        <br></br>
        <p className="text-green-700 font-bold text-sm">Thanks for subscribing! Please check your email to confirm.</p>
      </div>
      <form
        action="https://nicosquiroz.us16.list-manage.com/subscribe/post?u=08eff90bebaa424104c818e48&amp;id=dc64551c99&amp;f_id=00f122e1f0"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <h3 className="font-bold">Newsletter</h3>
        <p className="text-sm text-gray-600">Get updates on new posts and insights</p>
        <div className="flex gap-2">
          <input
            type="email"
            name="EMAIL"
            placeholder="your@email.com"
            className="text-sm flex-1 px-4 py-2 border focus:border-orange-600 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-4 py-1 border text-black hover:bg-orange-600 hover:text-white"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;