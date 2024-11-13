import React from 'react';
import Subtitle from './Title';

export default function Footer() {
  return (
    <footer className="bg-white py-8 text-gray-600">
        <hr />
      <div className="container mx-auto flex flex-col mt-10 md:flex-row justify-between items-start lg:justify-around">
      <div className="mb-8 md:mb-0">
  <h4 className="text-gray-900 font-bold mb-4">Subscribe to the Opal Newsletter</h4>
  <p className="text-gray-600">Latest news, musings, announcements and updates direct to your inbox.</p>
  <a 
    href="#" 
    className="inline-flex items-center bg-black text-white px-12 py-3 rounded-full mt-4 hover:bg-yellow-400 hover:text-black transition-colors"
  >
    Subscribe
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="w-6 h-6 ml-2" // Adjust size and spacing here
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  </a>
</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Tadpole</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Opal C1</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Composer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Support</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Media Kit</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Downloads</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors  text-sm">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/anany__more/" className="hover:text-pink-700  text-lg">Instagram</a></li>
              <li><a href="https://x.com/Anany_More?t=g1odz_dpe0BugnSJixTfzQ&s=09" className="hover:text-black  text-lg">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='grid md:grid-cols-4 justify-between ml-10 text-xs mt-4'>
        <h5>Anany More Developement</h5>
        <h5>All Rights Reserved by 2024.</h5>
      </div>
    </footer>
  );
}
